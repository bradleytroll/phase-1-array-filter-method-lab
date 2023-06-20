// Redoing old labs for practice. New code written below with original code commented out beneath.

function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

// Rewritten as arrow function: 
// function findMatching(drivers, string) {
//   return drivers.filter(driver => driver.toLowerCase()n === string.toLowerCase());
// }

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase().startsWith(string.toLowerCase());
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name === string;
  });
}

// function findMatching(drivers, string) {
//     return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
//   }
 
//   function fuzzyMatch(array, string) {
//     return array.filter((driver) => {
//       const regex = new RegExp(`^${string}`, 'i');
//       return regex.test(driver);
//     });
//   }
//   function matchName(drivers, string) {
//     return drivers.filter(driver => driver.name === string);
//   }
