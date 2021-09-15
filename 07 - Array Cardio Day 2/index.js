// ## Array Cardio Day 2

// Datasets
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
// });

// rewrite as a single line arrow function
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log("isAdult <>>>", {isAdult});


// Array.prototype.every() // is everyone 19 or older?
const areAllOfAge = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({areAllOfAge});


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// function findCommentById(id) {
//   const text = comments.find(comment => comment.id === id);
//   console.log(comment.text);
// }

// rewrite as an arrow function
// const findCommentById = (id) => {
//   console.log(`comment id ${id} :`, (comments.find(comment => comment.id === id).text));
//   // return comments.find(comment => comment.id === id).text;
// }

// doesn't work if the id isn't found
const findCommentById = (id) => {
  const text = comments.find(comment => comment.id === id);
  console.log({text});
}

findCommentById(123523);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log("comments <>>>");
console.table(comments);

// function deleteCommentById(id) {
//   const text = comments.findIndex(comment => comment.id === id);
//   // console.log({text});
//   comments.splice(text, 1);  
// };

  // rewrite as an arrow function
  const deleteCommentById = (id) => {
    const text = comments.findIndex(comment => comment.id === id);
    comments.splice(text, 1);
  };

// rewrite the function and maintain the original dataset
// let updatedComments = [];

// function deleteCommentById(id) {
//   const text = comments.findIndex(comment => comment.id === id);

//   updatedComments = [
//     ...comments.slice(0, text),
//     ...comments.slice(text + 1)
//   ];
// };

deleteCommentById(823423);
console.log("updated comments <>>>");
console.table(comments);
// console.table(updatedComments);