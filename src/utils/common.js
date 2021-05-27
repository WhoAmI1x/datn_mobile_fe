const getDateStringAndTime = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.toLocaleTimeString()}s`;
}

const getDateString = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const isFalsyValue = value => ["", null, undefined].includes(value);


export { getDateString, getDateStringAndTime, isFalsyValue };