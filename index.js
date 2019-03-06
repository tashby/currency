console.log(process.argv);

var listOfCoins = process.argv[3]; // 'Quarter,25,Dime,10,...
var coinNamesAndValues = listOfCoins.split(','); //['Quarter', '25', 'Dime', '10']
var numberOfCoins = coinNamesAndValues.length / 2

var coinNames = getEven(coinNamesAndValues);
var coinValues = getOdd(coinNamesAndValues);

function printCombinations(money, coins, usages, coinIndex) {
   //Things to do
    if (money == 0) {
      return coinValues;
    }
}

printCombinations(money, coinValues, [].fill(0, 0, numberOfCoins), 0);


function getOdd(arr) {
  return arr.reduce((acc, cur, idx) => {
    if(idx % 1 == 0){
      return acc.push(cur);
    }
    else return acc;
  }, []);
}

function getEven(arr) {
  return arr.reduce((acc, cur, idx) => {
    if(idx % 2 == 0){
      return acc.push(cur);
    }
    else return acc;
  }, []);
}


//Things to do:
// FIX ***TypeError: Cannot read property 'split' of undefined
// 1. Add recursion
// 2. Add coinIndex increment
// 3. Add usages[?] increment
// 4. Add solution at money == 0
// 5. Add printout when recursion ends.
