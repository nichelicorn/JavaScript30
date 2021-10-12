// 🌐 Global variables
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// first, return the list sorted alphabetically, including the articles
// const alphaSortedBands = bands.sort();

// next, sort the bands alphabetically, without the articles
//   // remove articles from the band name before sorting
//     // slice the article from the beginning of the string

// if the first three characters are the or an  or a  , remove the first three characters

const alphaSortedBands = bands.sort((a, b) => {
  // console.log("a <>>>", a);
  // console.log("b <>>>", b);
  const anA = "A" + " ";
  const anAn = "A" + "n" + " ";
  const aThe = "T" + "h" + "e" + " ";
  const aShortString = a.slice(0, 3);
  console.log("aShortString <>>>", aShortString);
  
  if (a.includes(anA)) {
    // console.log("found an A");
    a = a.slice(anA.length);
  } else if (a.includes(anAn)) {
    // console.log("found an An");
    a = a.slice(anAn.length);
  } else if (a.includes(aThe)) {
    // console.log("found a The");
    // a.slice(0, aThe.length);
    // console.log("a The <>>>", aThe);
    a = a.slice(aThe.length);
  }

  console.log("a reset <>>>", a);

  if (b.includes(anA)) {
    // console.log("found an A");
    b = b.slice(anA.length);
  } else if (b.includes(anAn)) {
    // console.log("found an An");
    b = b.slice(anAn.length);
  } else if (b.includes(aThe)) {
    // console.log("found a The");
    b = b.slice(aThe.length);
  }

  console.log("b reset <>>>", b);
  // turn the string into an array
  // if the first word is an article, remove it
  // continue checking alpha order

  return (a > b) ? 1 : -1;  

});


console.log("alphabetical bands <>>>", alphaSortedBands);

// array of band names
// needs to be alpha-sorted
// sorting should ignore grammatical articles
// return newly sorted list



