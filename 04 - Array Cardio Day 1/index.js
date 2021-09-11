    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteeners = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

    console.log("inventors of the 16th century <>>>");
    console.table(fifteeners);
    
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const nameArray = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));

    console.log("inventor's names <>>>");
    console.log(nameArray);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // const inventorsByYear = inventors.sort(function(a, b) {
    //   if (a.year > b.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });

    // same thing, written as a ternary
    const inventorsByYear = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

    console.log("inventors sorted by ascending year of birth <>>>");
    console.table(inventorsByYear);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);

    console.log("total years lived by all inventors <>>>");
    console.log(totalYears);

    // 5. Sort the inventors by years lived
    // const ageSortedInventors = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
    const ageSortedInventors = inventors.sort((a, b) => {
      const first = a.passed - a.year;
      const second = b.passed - b.year;

      return first > second ? 1 : -1;
    })

    console.log("inventors sorted by ascending age <>>>");
    console.table(ageSortedInventors);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // open link and work through exercise in the dev tools
    // const category = document.querySelector(".mw-category");
    // const links = [...category.querySelectorAll("a")];
    // pulls a list of links out of all category elements
    // convert list of links to a list of names that can be filtered through
    // const de = links
    //   .map(link => link.textContent)
    //   .filter(streetName => streetName.includes("de"));


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.log("people sorted alphabetically by last name <>>>");
    const alphaPeople = () => {
      // const sortedFolks = people.sort((a, b) => {
      //   // console.log("a <>>>", a);
      //   // console.log("b <>>>", b);
      //   // console.log("a > b ? ", a > b);
      //   return a > b ? 1 : -1;
      // });
    
      const sortedFolks = people.sort((a, b) => {
        const [aLast, aFirst] = a.split(", ");
        const [bLast, bFirst] = b.split(", ");
        return aLast > bLast ? 1 : -1;
      });

      console.log(sortedFolks);
    };

    alphaPeople();

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // return the number of times each of these items appears in the array
    const countItems = () => {
      const dataObj = data.reduce((obj, item) => {
        // console.log("item <>>>", item);
        // console.log("obj <>>>", obj);

        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {} );

      console.log("transportation devices with number of occurrences <>>>");
      console.table(dataObj);
    };

    countItems();
