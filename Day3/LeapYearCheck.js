function isleapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isleapYear(2020));
console.log(isleapYear(1900));
console.log(isleapYear(2000));
console.log(isleapYear(2021));