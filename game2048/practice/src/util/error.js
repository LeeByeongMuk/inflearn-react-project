export const error = (isError, message) => {
    if (isError) {
        throw new Error(`Error ${message}`);
    }
}