const getDateStringAndTime = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.toLocaleTimeString()}s`;
}

const getDateString = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export { getDateString, getDateStringAndTime };