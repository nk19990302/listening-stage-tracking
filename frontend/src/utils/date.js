export const getDate = () => {
    const dateTime = new Date();
    return (
        dateTime.getFullYear() +
        "-" +
        (dateTime.getMonth() + 1) +
        "-" +
        dateTime.getDate()
    );
};
