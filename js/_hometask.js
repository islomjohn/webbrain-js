//! 1
let score = 98;
score < 50 && console.log("failed");
score > 51 && score < 61 && console.log("C");
score > 61 && score < 86 && console.log("B");
score > 86 && score < 101 && console.log("A");

//! 2
var meva = "olcha"

meva === "olma" && console.log("10000");
meva === "nok" && console.log("12000");
meva === "tarvuz" && console.log("20000");
meva !== "tarvuz" && meva !== "olma" && meva !== "nok" && console.log("Unday meva yo'q");

//! 3
var num = 211;
num % 2 !== 0 && console.log(`${num} toq son`);
num % 2 === 0 && console.log(`${num} juft son`);

