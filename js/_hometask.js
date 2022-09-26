//! 1
// A3B2C3A

const makeEncode = (str) => {
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    
  }
}

//! 2
var arr = [4, 10, 888, 99, 100]
const max = Math.max(...arr)
const min = Math.min(...arr)
console.log(`max - ${max}, min - ${min}`);

//! 3 
const deleteMeva = (arr, meva) => {
  const filteredArr = arr.filter((item) => {
    return item !== meva
  })
  return filteredArr
}
console.log(deleteMeva(["nok","banan", "tarvuz", "olma"], "olma"));
