const bigNumber = [3125412, 68278, 6485, 68485, 6465];
const sortBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortBigNumber);