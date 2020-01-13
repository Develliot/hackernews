export const limitNumberWithinRange = (
    num: number,
    min: number,
    max: number
): number => {
    if (min > max) {
        throw new Error('min must be smaller than max');
    }
    return Math.min(Math.max(num, min), max);
};
