//! 1 

const getOddAndEvenNumbers = (num = 100) => {
  let i = 0;
  while (i < num) {
    i++;
    if(i % 2 === 0) console.log(`${i} juft son`);
    else console.log(`${i} toq son`);
  }
  return `Siz kiritgan son ${num}`
}

console.log(getOddAndEvenNumbers(50));

//! 2 
const getUpperCaseLetters = (str = "WeBbraIN") => {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(str[i].toUpperCase() == str[i]) newStr += str[i]
  }
  return newStr;
}
console.log(getUpperCaseLetters("WeBraIN"));

//! 3 
const getSameLetters = (str = "WebBrainAcadAmya") => {
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if(str[i] === "A" || str[i] === "a") count++;
  return `A, a - ${count}`
}
console.log(getSameLetters("WebBrainAcadAmya"));

//! 4 
const repeatTen = (str = "webBrain") => {
  let newStr = ""
  for (let i = 0; i < 10; i++)
    newStr += str.replace("web", "IT") + " ";
  return newStr
}
console.log(repeatTen('webBrain'));

//! 5
const getReverseName = (name = "fozil") => {
  let newName = ""
  for(let i = name.length - 1; i >= 0; i--) {
    newName += name[i];
  }
  return newName;
}
console.log(getReverseName("fozil"));

//! 6 
const getMedia = (str = "2456789") => {
  let arr = str.split("")
  if(arr.length % 2 === 0)
    return (Number(parseInt(arr[arr.length / 2]) + parseInt(arr[arr.length / 2 - 1])) / 2);
  else
    return (Number(arr[parseInt(arr.length / 2)]));
}
console.log(getMedia("0123456789"));