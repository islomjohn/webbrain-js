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
const newUserName = document.querySelector("#form-name")
const newUserAge = document.querySelector("#form-age")
const newUserJob = document.querySelector("#form-job")
const search = document.querySelector("#floatingSearch")
const badge = document.querySelector(".badge")

let searchText = "";

function onDelete(item) {
  g15 = g15.filter(({id}) => id !== item)
  render()
}

function onCreate() {
  if(newUserName.value) {
    if(newUserAge.value){
      if(newUserJob.value){
        g15.push({id: g15.length + 1, name: newUserName.value, age: newUserAge.value, job: newUserJob.value})
        render()
      }
    }
  }
}
btn.addEventListener("click", onCreate)

search.addEventListener("input", (e) => {
  searchText = e.target.value
  render()
})


function render() {
  badge.textContent = `Users ${g15.length}`
  table.innerHTML = `
  <thead class="table-light">
    <tr class="fs-5">
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody class="table-group-divide">
   ${g15.map(({id,name,age,job}, index) => name.toLowerCase().includes(searchText.toLowerCase()) && `
   <tr class="fs-6">
     <td>${index + 1}</td>
     <td>${name}</td>
     <td>${age}</td>
     <td>${job}</td>
     <td>
       <button onclick="onDelete(${id})" class="btn btn-danger">Delete</button>
     </td>

   </tr>
   `).filter(Boolean).join(" ")}
  </tbody>
  `
}
render()
