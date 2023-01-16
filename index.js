// console.log('Otus');
// const a = "ttttt";
// let b = 'eeeee';
// console.log (a);
// console.log(b);

// const user = { 
//     name: 'Jack',
//     age: 33
// }



// const c = 1
// const d = 4
// const e = c + d
// console.log(e)

// function sum( a, d) {
//     return a + d;
// }
// const a = 2
// const d = 7
// console.log(sum(a, d))

// function del( a, d){
//     return d - a
// }
// console.log(del(a, d))


// function switchCase(c){
//     switch(c){
//         case 1:
//         return 100;
//         case 2: 
//         return 1000;
//         default :
//         return 0;

//     }
// }

// console.log(switchCase(1));

// npm test

import { strict as assert } from 'node:assert';

assert.equal(sum(2, 2), 4)

function sum(a,b) {
    return a+b
}
