const formatDate = (date) => {
    const dateObj = date.toString().substring(0, 10).split("-");
    return dateObj.reverse().join("-");
}

export default formatDate;
