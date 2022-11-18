import inquirer from "inquirer";
import {
    parsePackageNameAndVersion,
    RefinePackageInstalledVersionData as RefinePckg,
} from "src/lib/package-manager";
import semverDiff from "semver-diff";
import chalk from "chalk";
import { findDiffrences, findDuplicates } from "src/utils/array";

type UIGroup = {
    patch: {
        name: string;
        from: string;
        to: string;
    }[];
    minor: {
        name: string;
        from: string;
        to: string;
    }[];
    major: {
        name: string;
        from: string;
        to: string;
    }[];
};

export const promptInteractiveRefineUpdate = async (packages: RefinePckg[]) => {
    const uiGroup = createUIGroup(packages);
    const inquirerUI = createInquirerUI(uiGroup);

    // eslint-disable-next-line prefer-const
    let result: string[] = [];
    // eslint-disable-next-line prefer-const
    let lastAnswer: string[] = [];

    inquirer
        .prompt<{
            packages: string[];
        }>([
            {
                type: "checkbox",
                name: "packages",
                message: "Choose packages to update",
                pageSize: inquirerUI.pageSize,
                choices: inquirerUI.choices,
            },
        ])
        .ui.process.subscribe({
            next: ({ answer }) => {
                result.push("1");
            },
            complete: () => console.log("complete", result),
        });

    return null;

    // return answers.packages.length > 0 ? answers.packages : null;
};

export const onSelectChoiceHandler = (props: {
    answer: string[];
    lastAnswer: string[];
    result: string[];
}) => {
    const { answer, result, lastAnswer } = props;

    const currentSelected = findDiffrences(answer, lastAnswer)?.[0] as string;
    if (!currentSelected) {
        console.log("not found", {
            answer,
            lastAnswer,
            result,
            currentSelected,
        });
        return;
    }

    const actionType = lastAnswer.length > answer.length ? "remove" : "add";
    if (actionType === "remove") {
        const index = result.findIndex((item) => item === currentSelected);
        result.splice(index, 1);
        console.log("remove", {
            answer,
            lastAnswer,
            result,
            currentSelected,
            actionType,
        });
        return;
    }
    const currentSelectedParsed = parsePackageNameAndVersion(currentSelected);
    const isExist = result.findIndex((pckg) =>
        pckg.startsWith(currentSelectedParsed.name),
    );
    if (isExist !== -1) {
        result.splice(isExist, 1);
    }
    result.push(currentSelected);
    console.log({
        answer,
        lastAnswer,
        result,
        currentSelected,
        isExist,
        actionType,
    });
};

export const validatePrompt = (input: string[]) => {
    const inputParsed = input.map((pckg) => {
        return parsePackageNameAndVersion(pckg);
    });

    const names = inputParsed.map((pckg) => pckg.name);
    const duplicates = findDuplicates(names);

    if (duplicates.length > 0) {
        return `You can't update the same package more than once. Please choice one.\n Duplicates: ${duplicates.join(
            ", ",
        )}`;
    }

    return true;
};

export const createUIGroup = (packages: RefinePckg[]): UIGroup => {
    const packagesCategorized: UIGroup = {
        patch: [],
        minor: [],
        major: [],
    };

    packages.forEach((pckg) => {
        const current = pckg.current;

        const diffWanted = semverDiff(current, pckg.wanted) as keyof UIGroup;
        const diffLatest = semverDiff(current, pckg.latest) as keyof UIGroup;

        if (diffWanted === diffLatest) {
            if (diffLatest) {
                packagesCategorized[diffLatest].push({
                    name: pckg.name,
                    from: current,
                    to: pckg.latest,
                });
                return;
            }
        }

        if (diffWanted) {
            packagesCategorized[diffWanted].push({
                name: pckg.name,
                from: current,
                to: pckg.wanted,
            });
        }

        if (diffLatest) {
            packagesCategorized[diffLatest].push({
                name: pckg.name,
                from: current,
                to: pckg.latest,
            });
        }
    });

    return packagesCategorized;
};

const createInquirerUI = (uiGroup: UIGroup) => {
    let maxNameLength = 0;
    let maxFromLength = 0;

    [uiGroup.patch, uiGroup.minor, uiGroup.major].forEach((group) => {
        group.forEach((pckg) => {
            if (pckg.name.length > maxNameLength) {
                maxNameLength = pckg.name.length;
            }

            if (pckg.from.length > maxFromLength) {
                maxFromLength = pckg.from.length;
            }
        });
    });

    maxNameLength += 2;

    const choices: (
        | inquirer.Separator
        | {
              name: string;
              value: string;
          }
    )[] = [];

    const packageColumnText = "Package".padEnd(maxNameLength);
    const currentColumnText = "From".padEnd(maxFromLength);
    const toColumnText = "To";
    const header = `\n   ${packageColumnText} ${currentColumnText}${toColumnText.padStart(
        maxFromLength,
    )}`;
    choices.push(new inquirer.Separator(header));

    if (uiGroup.patch.length > 0) {
        choices.push(
            new inquirer.Separator(chalk.reset.bold.blue("\nPatch Updates")),
        );
        uiGroup.patch.forEach((pckg) => {
            choices.push({
                name: `${pckg.name.padEnd(maxNameLength)} ${pckg.from.padStart(
                    maxFromLength,
                )} -> ${pckg.to}`,
                value: `${pckg.name}@${pckg.to}`,
            });
        });
    }

    if (uiGroup.minor.length > 0) {
        choices.push(
            new inquirer.Separator(chalk.reset.bold.blue("\nMinor Updates")),
        );
        uiGroup.minor.forEach((pckg) => {
            choices.push({
                name: `${pckg.name.padEnd(maxNameLength)} ${pckg.from.padStart(
                    maxFromLength,
                )} -> ${pckg.to}`,
                value: `${pckg.name}@${pckg.to}`,
            });
        });
    }

    if (uiGroup.major.length > 0) {
        choices.push(
            new inquirer.Separator(chalk.reset.bold.blue("\nMajor Updates")),
        );
        uiGroup.major.forEach((pckg) => {
            choices.push({
                name: `${pckg.name.padEnd(maxNameLength)} ${pckg.from.padStart(
                    maxFromLength,
                )} -> ${pckg.to}`,
                value: `${pckg.name}@${pckg.to}`,
            });
        });
    }

    const pageSize = choices.length + 6;

    return { choices, pageSize };
};
