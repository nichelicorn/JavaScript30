// start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;
console.log(age1, age2);
age1 = 200;
console.log(age1, age2);

let name1 = "Yoda";
let name2 = name1;
console.log(name1, name2);
name1 = "Grogu";
console.log(name1, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log("players <>>>", players);
// console.log("team <>>>", team);

// You might think we can just do something like this:
// team[3] = "Lux";
// console.log("team updated <>>>", team);

// however what happens when we update that array?
// console.log("players <>>>", players);

// now here is the problem!
//calling the original array again (players), notes that this array has *also* been updated! this is not a desired outcome...want a copy to be a copy; 

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
// calling .slice() without an argument will return the entire array;
console.log("team2 <>>>", team2);
team2[3] = "Lux";
console.log("team2 updated <>>>", team2);
console.log("players <>>>", players);
// now there is an array to manipulate while mainintaing state on the original array
// updates on team2 will not affect players

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = "Pickle Face";
console.log("team3 uses `concat` <>>>", team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Nail Face Guy... what's his name?"
console.log("team4 uses the spread op.<>>>", team4);

const team5 = Array.from(players);
team5[3] = "Pinhead";
console.log("team5 uses Array.from() <>>>", team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
name: 'Wes Bos',
age: 80
};
console.log("person <>>>", person);

// and think we make a copy:
// const personDup = person;
// console.log("personDup <>>>", personDup);
// personDup.age = 66;
// console.log("person <>>>", person);
// changes the original object, as occurred with the array example ablve

// how do we take a copy instead?
// use Object.assign
const person1 = Object.assign( {}, person, { age: 113, occupation: "Eccentric millionaire" } ); // as arguments, takes an empty object and object whose properties you want to copy, and any additional properties to be added in an additional object
person1.name = "Frederick Loren";
console.log("person1 <>>>", person1);

// We will hopefully soon see the object ...spread
const person2 = { ...person }; // this worked!! created an object copy
person2.name = "Annabelle Loren";
person2.age = 111;
person2.occupation = "Ghost";
console.log("person2 <>>>", person2);

// console.log("person <>>>", person); // the original object is unaltered

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

// Object.assign will only copy only level deep - if there is nested data, those objects will continue to reference up to the original object
// try this out with a spread operator, then work through Wes' example if that doesn't work

person3 = { 
  name: "Vincent Price", 
  occupation: "Actor", 
  films: [
    { name: "The Pit and the Pendulum", year: 1961 },
    { name: "Witchfinder General", year: 1968 },
    { name: "The Great Mouse Detective", year: 1986 },
  ],
};
console.log("person3 <>>>", person3);

person4 = { ...person3 };
person4.films = [];

console.log("person4 <>>>", person4);
// this works!! reassigns the value to an empty array and doesn't alter the original object 🎉
console.log("person3 <>>>", person3);
