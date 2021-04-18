// let val;

// let num = 10;

// // object literal
// let yigit = {
//     name:'yigit',
//     yearOfBirth:'2010',
//     job:'student'
// }

// // array
// let numbers = [10,20,30];

// val = num;
// val = yigit;
// val = numbers;


// console.log(val);
// console.log(typeof val);


// object literals
// let yigit = {
//     name:'yigit',
//     yearOfBirth:'2010',
//     job:'student'
// }

// function person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2021-this.yearOfBirth;
//     }

   
// }

let person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2021-this.yearOfBirth;
    }
}

let yigit = new person('yigit',2010,'student');
let emel = new person('emel',1989,'teacher');

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());

console.log('*******************************');

console.log(emel.name);
console.log(emel.yearOfBirth);
console.log(emel.job);
console.log(emel.calculateAge());