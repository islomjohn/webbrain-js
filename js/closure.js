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
