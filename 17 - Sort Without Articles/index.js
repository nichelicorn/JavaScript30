// 🌐 Global variables
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const alphaSortedBands = bands.sort((a, b) => {
  const anA = "A" + " ";
  const anAn = "A" + "n" + " ";
  const aThe = "T" + "h" + "e" + " ";
  
  if (a.includes(anA)) {
    a = a.slice(anA.length);
  } else if (a.includes(anAn)) {
    a = a.slice(anAn.length);
  } else if (a.includes(aThe)) {
    a = a.slice(aThe.length);
  }

  // console.log("a reset <>>>", a);

  if (b.includes(anA)) {
    b = b.slice(anA.length);
  } else if (b.includes(anAn)) {
    b = b.slice(anAn.length);
  } else if (b.includes(aThe)) {
    b = b.slice(aThe.length);
  }

  // console.log("b reset <>>>", b);

  return (a > b) ? 1 : -1;  

});


console.log("alphabetical bands <>>>", alphaSortedBands);

// array of band names
// needs to be alpha-sorted
// sorting should ignore grammatical articles
// return newly sorted list



