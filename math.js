const number = 3.6;

//Math.Round
// console.log(Math.round(number));

//Math.Floor
// console.log(Math.floor(number));

//Math.Ceil
// console.log(Math.ceil(number));

//Math.Random
for (let i = 0; i < 20; i++) {
    let randomNUmber = Math.random(number) * 5;
    console.log(Math.round(randomNUmber));
}