const myDate = new Date('1996-9-16');
// console.log(myDate);
const anotherDate = new Date(1982, 4, 23, 5, 55, 55, 846);
if (myDate < anotherDate) {
    console.log(myDate);
}
else {
    console.log(anotherDate);
}


// by getTime using
if (myDate.getTime() < anotherDate.getTime()) {
    console.log(myDate);
}
else {
    console.log(anotherDate);
}

const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());