isLeapYear = () => {
    input = document.getElementById("year").value;
    year = parseInt(input);
    if (Number.isInteger(year) === false) {
        return alert("Please enter a valid year.");
    }
    if (checkYear() === true) {
        return alert(`Yes, ${year} is a Leap Year.`);
    }
    if (checkYear() === false) {
        return alert(`No, ${year} is not a Leap Year.`);
    }
}
checkYear = () => {
    if ((year % 4) == 0 && (year % 100) != 0 || (year % 400) == 0) {
        return true;
    } else {
        return false;
    }
}

