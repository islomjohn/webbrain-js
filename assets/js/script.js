let g15 = [
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


const section = document.querySelector("#section");
const table = document.querySelector(".table")
const btn = document.querySelector("#button-addon2")
const formName = document.querySelector("#form-name")
const formAge = document.querySelector("#form-name")
const formJob = document.querySelector("#form-job")

let newUserName = "";
let newUserAge = "";
let newUserJob = "";



function onDelete(item) {
  console.log(5);
  g15 = g15.filter(({id}) => id !== item)
  render()
}
function onCreate(e) {
  
  if(formName.length){
    if(formAge.length){
      data.push({id: g15.length + 1, name: newUserName, age: newUserAge, job: newUserJob})
    }
  }
  render()
}
formName.addEventListener("input", onCreate)
formAge.addEventListener("input", onCreate)
formJob.addEventListener("input", onCreate)

function render() {
  table.innerHTML = `
  <thead class="table-light">
    <tr class="fs-4">
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody class="table-group-divide">
   ${g15.map(({id,name,age,job}, index) => {
    return `
    <tr class="fs-5">
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${job}</td>
      <td>
        <button onclick="onDelete(${id})" class="btn btn-danger">Delete</button>
      </td>

    </tr>
    `
   }).join(" ")}
  </tbody>
  `
}
render()