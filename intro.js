function repeatStr (n, s) {
  let str = ""
  for(let i = 1; i <=n; i++){
    str = str + s
  }
  return str;
}

function opposite (number) {
  if(number > 0) {
    return - number;
  } else {
    return number - number - number;
  } 
}

function positiveSum(arr) {
    let array1 = arr.filter(function(e) { return e > 0})
    let amount =  array1.reduce((num, sum)=>
    num + sum, 0)
    return amount;
}

function removeChar(str){
  //You got this!
  return str.substr(1, str.length-2);
 }

module.exports = {
  repeatStr, removeChar, positiveSum, opposite
}
