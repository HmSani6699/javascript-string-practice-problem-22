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


/* ------------ */

// let arrayNumber = [1, 3, 5, 2, 4, 6, 7, 9, 8];
// console.log(arrayNumber)

// let sortedArray = arrayNumber.sort();
// console.log(sortedArray)

// let lengthArray = sortedArray.length;
// console.log(lengthArray);

// //get second largest number
// let largestNUmber = sortedArray[lengthArray - 2];
// console.log(largestNUmber)



function number(array) {
    let sortedArray = array.sort(((a, b) => a - b));
    let arrayLength = sortedArray.length;
    let secondLargest = sortedArray[arrayLength - 2]
    return secondLargest;
}
let arrayNumber = [45, 2, 50, 30, 11, 29, 7];
let secondLargestNumber = number(arrayNumber);
console.log(secondLargestNumber);