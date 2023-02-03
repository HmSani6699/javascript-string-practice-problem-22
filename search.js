//includes
const madrasaName = 'pakunda islamia madrasA'
// const check = madrasaName.includes('mAdrasa');
var word = 'mAdrasa';
let toLowerCase = word.toLowerCase()
let search = madrasaName.toLowerCase().includes(toLowerCase);
// console.log(search)



//startswith
const ami = 'ami alhamdolillh vallo asi';
const check = ami.startsWith('ami')
// console.log(check)



//endswith
const bookName = 'bangla arbi gonit somaj';
const bookSearch = bookName.endsWith('somaj')
// console.log(bookSearch)


//-------------------------
// check the letter on string to includes

const address = 'ami bogora te asi';

//includes
console.log(address.includes(''));

//indexOf
console.log(address.indexOf(' '));

//startsWith
console.log(address.startsWith('ami'));

//endsWith
console.log(address.endsWith('s'));




