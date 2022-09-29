const g15 = [
  {
      id: 1,
      name: 'Abdulaziz',
      age: 20,
      job: "developer"
  },
  {
      id: 2,
      name: 'Shaxzodbek',
      age: 21,
      job: "developer"
  },
  {
      id: 3,
      name: 'Farrux',
      age: 25,
      job: "developer"
  },

  {
      id: 4,
      name: 'Ahtambek',
      age: 22,
      job: "developer"
  },

  {
      id: 5,
      name: 'Miras',
      age: 27,
      job: "developer"
  },

  {
      id: 6,
      name: 'Islomjon',
      age: 25,
      job: "developer"
  },

  {
      id: 7,
      name: 'Asrorbek',
      age: 30,
      job: "developer"
  },
]

//! 1 
const deleteUser = (arr, userId) => arr.filter(({id}) => userId !== id)
// console.log(deleteUser(g15, 7));

const onDelete = (arr, userId) => { 
  for (let i = 0; i < arr.length; i++)
    if (userId === arr[i].id)
      arr.splice(userId - 1, 1)
    return arr;
}
console.log(onDelete([...g15], 1));
// console.log(g15);

//! 2
const sortUser = (arr) => arr.sort((a, b) => a.age - b.age);
// console.log(sortUser(g15));

//! 3
const createUser = (name = "Islom", age = 21, job = "builder") => {
  const CreateObj = () => ({id: g15.length + 1, name, age, job})
  g15.push(CreateObj())
  return g15;
}
// console.log(createUser("Islom", 20, "waiter"));
// console.log(createUser("Baxa", 22, "builder"));
