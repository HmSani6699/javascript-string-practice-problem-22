let number1 = 200;
let number2 = 100;
let number3 = 50;
if (number1 > number2) {
    if (number1 > number3) {
        // console.log(number1)
    }
    else {
        // console.log(number3)
    }

}
else {
    if (number2 > number1) {
        // console.log(number2)
    }
    else {
        // console.log(number3)
    }

}

//check the max number
let maxNumber = Math.max(number1, number2, number3);
console.log(maxNumber)

//check the max number
let maxNumber_1 = Math.min(number1, number2, number3);
console.log(maxNumber_1)