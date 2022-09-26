//! 1
var userName = "Fozil";
var result = userName[userName.length - 1] === "l";
console.log(result);

//! 2 
var str1 = "Web";
var str2 = "Brain";
[str1, str2] = [str2, str1]
console.log(str1);

//! 3 
var year = 2021;
var leapYear = new Date(year, 1, 29).getDate() === 29 ? "Kabisa yil" : "Xato";
console.log(leapYear);