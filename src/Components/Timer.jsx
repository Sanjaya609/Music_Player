export const Timer = (time) => {
    if (!time) return "";

    try {
        return new Date(time * 1000).toISOString().substring(11, 11 + 8);
    } catch (error) {
        return "";
    }
};
