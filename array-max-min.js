function maxInArray(array) {
    let maxNumber = [0];
    for (var i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > maxNumber) {
            maxNumber = element
        }
    }
    return maxNumber
}
const array = [11, 24, 32, 4, 500, 6, 7, 85, 9];
const result = maxInArray(array);
// console.log(result)


function maxInArray(array_1) {
    let maxNumber = array_1[0];
    for (var i = 0; i < array_1.length; i++) {
        const element = array_1[i];
        if (element < maxNumber) {
            maxNumber = element
        }
    }
    return maxNumber
}
const array_1 = [11, 24, 32, 4, 500, 6, 7, 85, 9];
const result_1 = maxInArray(array_1);
// console.log(result_1)





/* ------------------------ */
//--array max number---//
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNumber = number[0];
for (let i = 0; i < number.length; i++) {
    let index = number[i];
    if (index < maxNumber) {
        maxNumber = index;
    }
}
console.log(maxNumber)

