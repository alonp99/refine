import { findDuplicates, findDiffrences } from ".";

test("Find duplicates from array", () => {
    const testCases = [
        {
            input: [],
            output: [],
        },

        {
            input: [1, 2, 3, 3, "3", "3"],
            output: [3, "3"],
        },
        {
            input: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
            output: [1, 2, 3, 4, 5],
        },
    ];

    testCases.forEach((testCase) => {
        const result = findDuplicates(testCase.input);
        expect(result).toEqual(testCase.output);
    });
});

test("Find diffrence from between array", () => {
    const testCases = [
        {
            input1: [],
            input2: [],
            output: [],
        },

        {
            input1: [1],
            input2: [],
            output: [1],
        },
        {
            input1: [],
            input2: [1],
            output: [1],
        },
        {
            input1: [2, 3, 4, 5, "1"],
            input2: [2, 3, 4, 5, 6],
            output: ["1", 6],
        },
    ];

    testCases.forEach((testCase) => {
        const result = findDiffrences(testCase.input1, testCase.input2);
        expect(result).toEqual(testCase.output);
    });
});
