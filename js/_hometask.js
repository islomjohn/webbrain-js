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

// console.log(getStep(num));

//! 2 
const fizzBuzz = (num) => {
  if (!Number.isFinite(num)) return "Not a Number";
  else if (!(num % 15)) return `${num} 3ga va 5ga bo'linadi`;
  else if (num % 5 === 0) return `${num} 5ga bo'linadi`;
  return `${num} 3 ga bo'linadi`
}
// console.log(fizzBuzz(" "))

//! 3   
const convertToHumanReadble = (num) => {
  let numToTen = [
  "", 
  "bir", 
  "ikki", 
  "uch", 
  "to'rt", 
  "besh", 
  "olti", 
  "yetti", 
  "sakkiz", 
  "to'qqiz"
  ];
  let numberToHundred = [
    "",
    "o'n", 
    "yigirma", 
    "o'ttiz", 
    "qirq", 
    "ellik", 
    "oltmish", 
    "yetmush", 
    "sakson", 
    "toqson", 
  ];
  let hundred = ["yuz"];
  if (Number.isNaN(num)) return "Not a Number";
  else if (num <= 9) return numToTen[num];
  else if (num <= 99) return `${numberToHundred[Math.trunc(num / 10)]} ${numToTen[num % 10]}`;
  else if (num > 99 && num <= 999 && num % 100 <= 99) 
    return `${numToTen[Math.trunc(num / 100)]} ${hundred[0]} ${numberToHundred[Math.trunc(num / 10) % 10]} ${numToTen[Math.trunc(num % 10)]}`;
  return `Uzr akaxon men bunday sonni qilib bera olmayman`;
}
console.log(convertToHumanReadble(785))