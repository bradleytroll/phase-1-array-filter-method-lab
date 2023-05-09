function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
 
  function fuzzyMatch(array, string) {
    return array.filter((driver) => {
      const regex = new RegExp(`^${string}`, 'i');
      return regex.test(driver);
    });
  }
  function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
  }
