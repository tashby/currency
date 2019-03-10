
var listOfCoins = process.argv[3]; // 'Quarter,25,Dime,10,...
var money = parseInt(process.argv[2]);
var coinNamesAndValues = listOfCoins.split(','); //['Quarter', '25', 'Dime', '10']
var numberOfCoins = coinNamesAndValues.length / 2

var coinNames = getEven(coinNamesAndValues);
var coinStrings = getOdd(coinNamesAndValues);
var coinValues = coinStrings.map(x => parseInt(x));

function findCombinations(money, coins, usages, coinIndex) {
    if (money == 0) {
      return [usages];
    }
    else if (coins.length == 0 || money < 0) {
      return [];
    }
    else {
      var updatedUsages = usages.slice(0);
      updatedUsages[coinIndex]++;
      return findCombinations(money - coins[0], coins, updatedUsages, coinIndex)
      .concat(findCombinations(money, coins.slice(1), usages, coinIndex+1));
    }
}
var combinations = findCombinations(money, coinValues, new Array(numberOfCoins).fill(0), 0);
console.log(coinNames)
console.log(combinations);

function getOdd(arr) {
  return arr.reduce((acc, cur, idx) => {
    if(idx % 2 == 1){
      return acc.concat([cur]);
    }
    else return acc;
  }, []);
}

function getEven(arr) {
  return arr.reduce((acc, cur, idx) => {
    if(idx % 2 == 0){
      return acc.concat([cur]);
    }
    else return acc;
  }, []);
}


//Things to do:
// foreach on js array for coin values
