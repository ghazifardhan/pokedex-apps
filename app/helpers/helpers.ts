export const capitalizeWord = (word?: string): string => {
    if (word != undefined) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return "";
}