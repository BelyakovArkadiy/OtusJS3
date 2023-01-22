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

// import { strict as assert } from 'node:assert';

// assert.equal(sum(2, 2), 4)

// function sum(a,b) {
//     return a+b
// }

// function getPersonInfo( name, surname, age){
//    return `Name:${name}. Surname:${surname}. Age:${age}`
// }
// const personInfo = getPersonInfo('Kurt', 'Ten', '40')
// console.log(personInfo);
// console.dir(personInfo); 

// const person2 = {
//     namePerson: null, 
//     surnamePerson: null,
//     agePerson: null
// }
// console.log(person2);

// person2.namePerson = 'Roma'
// person2.surnamePerson = 'Dota'
// person2.agePerson = 12

// console.log(person2);

// function getPersonInfo(person2){
//        return `Name:${person2.namePerson}. Surname:${person2.surnamePerson}. Age:${person2.agePerson}`
//     }

//     console.log(getPersonInfo(person2));

//     const person2 = {
//         namePerson: null, 
//         surnamePerson: null,
//         agePerson: null,
//         showInfo() {
//     console.log( `Name:${this.namePerson}. Surname:${this.surnamePerson}. Age:${this.agePerson}`)
//         }
//     }

//     person2.agePerson     = 30
//     person2.namePerson    = 'Tom'
//     person2.surnamePerson = 'JJ'

//     person2.showInfo();
// // для объекта
//     for (const key in person2){
//         console.log(`key: `, key, `value: `, person2[key])
//     }

//     const array = [100, 200, 300]
//     for(let i =0; i < array.length; i++){
//         array[i] = array[i] * 2
//     }
//     console.log(array);
// // для массива
//     for (const value of array){
//         console.log(`значение: `, value)
//     }



    const scores = {
       Anna : 10,
       Dana : 32,
       Giza : 13,
       Nina : 21
    }

    function getScores(scores)
    {
         let scoreUsers = 0
        for(const key in scores)
        {
        scoreUsers += scores[key];
        }
         return console.log(scoreUsers);
       }

        getScores(scores);

