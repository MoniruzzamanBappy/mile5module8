function sumOfArguments() {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}

const muResult = sumOfArguments(516, 646, 56, 5, 64, 654, 646, 4, 64, 64, 6, 46, 4, 64, 6, 46, 46, 4, 6);
console.log(muResult);