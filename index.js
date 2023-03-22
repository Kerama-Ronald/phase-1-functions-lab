// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    return Math.abs(value - 42);
  }
  
  function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    let price = 0;
    if (feet <= 400) {
      price = 0;
    } else if (feet <= 2000) {
      price = (feet - 400) * 0.02;
    } else if (feet <= 2500) {
      price = 25;
    } else {
      return 'cannot travel that far';
    }
    return price;
  }
  
