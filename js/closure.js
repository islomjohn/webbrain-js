//! Example g15
function gretting() {
  var message = "Hello"
  function greetingName() {
    console.log(message);
  }
  greetingName()
}
// gretting()

//==================================
//==================================

//! example Vladilen Minin
function createCalcFunction(n) {
  return function() {
    return (1000 * n);
  }
}
// console.log(createCalcFunction(42));

const calc = createCalcFunction(42)
// console.log(calc);
console.log(calc());

//==================================
//==================================

function incrementer(n) {
  return function(num) {
    return n + num
  }
}
const addOne = incrementer(1)
console.log(addOne(10)); // 11
console.log(addOne(20)); // 21

const addTen = incrementer(10)
console.log(addTen(100)); // 110
console.log(addTen(1000)); // 1010

//==================================
//==================================

const urlGenerator = (domen) => {
  return function(url) {
    return `https://${url}.${domen}`
  }
}

const comUrl = urlGenerator("com")
const ruUrl = urlGenerator("com")

console.log(comUrl("google"));
console.log(comUrl("netflix"));

console.log(comUrl("yandex"));
console.log(comUrl("vk"));
