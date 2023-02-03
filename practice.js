/* ----------practice problem 1------------ */

function getGor(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum += element;
    }
    return sum / array.length
}

let array = [10, 20, 40, 94, 50];
let result = getGor(array);
// console.log(result)


/* ----------practice problem 2------------ */
function number(array) {
    let sortedArray = array.sort(((a, b) => a - b));
    let arrayLength = sortedArray.length;
    let secondLargest = sortedArray[arrayLength - 2]
    return secondLargest;
}
let arrayNumber = [45, 2, 50, 30, 11, 29, 7];
let secondLargestNumber = number(arrayNumber);
// console.log(secondLargestNumber);

/* ---------practice problem 3---------- */

function number(num1, num2) {
    return num1 * num2;
}
let length = 7;
let width = 3;
let output = number(length, width);
console.log(output);