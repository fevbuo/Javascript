
/*
let js = 'amazing';
      if (js === 'amazing') alert ('JavaScript is FUN!');
      console.log(40 + 8 + 23 - 10);

      console.log("Joneas");
      console.log(23);

      let firstName = "Joneas";


      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

      // varible name convention
      let jonas_matilda = "JM";
      let $function = 27;

      let person = "jonas";
      let PI = 3.1415;

      let myFirstJob = "progtammmer";
      let myCurrentJob = "Teacher";

      let job1 = "progtammmer";
      let job2 = "Teacher";

      console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

*/
/*
var job = 'programmer';
job = 'teacher'


// maths operators
const now = 2037;
const ageJonas = now - 1991;
const agaSarah = now - 2018;
console.log(ageJonas, agaSarah);

console.log(ageJonas * 2, agaSarah  / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName)

//assignment operators
let x = 10 + 5; // 15
x += 10;  // x = x + 10 = 25
x *= 4; //  x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// comparison operators
console.log( ageJonas > agaSarah );
console.log(agaSarah >= 18);

const isFullAge = agaSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

// 1st chanllage class work
/*

*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const Jonas = "i'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(Jonas);

const JonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(JonasNew)

console.log(`just a regular staring...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

// example let see if sarah is old enough to take a driving license 

const age = 15;

if (age >= 18) {
      console.log("Sarah can start driving license")
} else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. waith another ${yearsLeft} years`)
}

// example 

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
      century = 20;
 } else {
century = 21;
 }

console.log(century);