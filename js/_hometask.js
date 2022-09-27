//! 1
const mockData = [
  {
    id: 1, name: "Fozil",
  },
  {
    id: 2, name: "Odil",
  },
  {
    id: 3, name: "Alibek",
  },
  {
    id: 4, name: "Elyor",
  }
]
const searchByName = (data, letter) => data.filter(({name}) => name.toLowerCase().includes(letter.toLowerCase()))
console.log(searchByName(mockData, "e"));

//! 2
var str = "ABBAC";
const findSame = (str) => {
  for (let i = 0; i <= str.length; i++)
    if (str[i] === str[i + 1])
      return str[i];
}
console.log(findSame(str));