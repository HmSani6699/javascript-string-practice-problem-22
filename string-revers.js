
let name = 'sani';
let nameLength = name.length;
let newNam = '';
for (let i = nameLength - 1; i >= 0; i--) {
    let revers = name[i]
    newNam += revers
}
// console.log(newNam)

let madrasa = 'pakunda islamia madrasa';
let namSplit = madrasa.split(' ');
let newMadrasaName = []
for (let i = namSplit.length - 1; i >= 0; i--) {
    let index = namSplit[i];
    newMadrasaName.push(index)
}
// console.log(newMadrasaName)


/* --------------------- */

/* let first = 'hallo';
console.log(first);

let split = first.split('');
console.log(split)

let revers = split.reverse();
console.log(revers)

let join = revers.join('');
console.log(join) */


let word = 'vallo';
let reve = word.split('').reverse().join('');
// console.log(reve)


let ma = 'ami tomay onek miss kori';

function reversString(ma) {
    let split = ma.split(' ');
    let splitLength = split.length;
    let revers = [];
    for (let i = splitLength - 1; i >= 0; i--) {
        let element = split[i]
        revers.push(element)
    }
    return revers
}
let result = reversString(ma);
let join = result.join(' ')
console.log(join)
