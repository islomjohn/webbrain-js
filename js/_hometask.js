//! 1
const findOddNumbers = (arr) => arr.filter(num => num % 2 !== 0)
// console.log(findOddNumbers([4,9,16,25,4,1]));

//! 2
const getLength = (arr) => arr.filter(item => item.length === 5)
// console.log(getLength(['salom','dunyo','hello','football']));

//! 3
const getBool = (arr) => arr.filter(item => item === false || item === true)
const isBool = (arr) => arr.filter(item => typeof(item) === "boolean")
console.log(getBool([1,2,3,true,'true']));
console.log(isBool([1,2,3,true,'true']));


//! 4
const findLetter = (str) => str.toLowerCase().includes("a")
// console.log(findLetter("salom"));

//! 5
const findLetter2 = (arr) => arr.filter(item => item.toLowerCase().includes("a"))
// console.log(findLetter2(['salom','dunyo','faang']));

//! 6
let obj={
  id:1,
  name:'Ali',
  add:'Mirzo Ulugbek'
}
const checkLetter = (obj) => obj.name.toLowerCase().includes("a")
console.log(checkLetter(obj));