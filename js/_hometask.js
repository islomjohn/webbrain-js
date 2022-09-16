//! 1 
let num = 5;
const getStep = (num) => {
  if(typeof num !== "number")
    return `Not a Number`;
  else if (num % 2 === 0)
    return `Number is ${num} Alice wins Bob lose`;
  else if ((num % 2 === 1))
    return `Number is ${num} Bob wins Alice lose`;
}

console.log(getStep(num))