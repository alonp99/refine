export const findDuplicates = (arr: (string | number)[]) => {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    const unique = new Set(duplicates);
    return Array.from(unique);
};

export const findDiffrences = (
    arr1: (string | number)[],
    arr2: (string | number)[],
) => {
    const diffrences1 = arr1.filter((item) => !arr2.includes(item));
    const diffrences2 = arr2.filter((item) => !arr1.includes(item));
    const diffrences = [...diffrences1, ...diffrences2];
    const unique = new Set(diffrences);
    return Array.from(unique);
};
