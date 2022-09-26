//! 1
// A3B2C3A

const makeEncode = (str) => {
  return str.split("").map((v,i) => `${+v + 1}` === "NaN" ? i !== 0 ? "-" +v : v: +v).join("").split("-").map(v => v[0].repeat(v[1] ? v[+1] : 1)).join("")
}
console.log(makeEncode("A5B3A2C"));

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
