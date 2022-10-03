//! 1
const changeToNumber = (arr) => arr.flatMap(val => +val)
// console.log(changeToNumber([1,2,4,56,'1', ["32"]]));

//! 2
const oddOrEven = (arr) => arr.map((val) => val % 2 === 0 ? `${val} juft` : `${val} toq`)
// console.log(oddOrEven([1,2,3,4,56,21]));

//! 3 
// let obj = {
//   id:1,
//   name:'Umar',
//   job:"bekorchi"
// }
// obj.job = "developer";
// console.log(obj);

//! 4
let obj = {
  id:1,
  name:'Umar',
  job:"bekorchi"
}
obj.job = "developer";

if (obj.job === "bekorchi")  obj.salary = 0;
else obj.salary = `300$`;

// console.log(obj);

//! 5
let newObj = Object.assign({}, obj);
let newObj2 = {...obj}
// console.log(newObj);
// console.log(newObj2);

//! 6
let changedObj = {...obj}
changedObj.name = "Islom";
console.log(obj, changedObj);


