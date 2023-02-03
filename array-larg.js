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


function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"))