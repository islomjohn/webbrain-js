function bind(context, fn) {
  return function(...args) {
    return fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`Person ${this.name} age ${this.age} and job ${this.job}`);
}

const person1 = {name: "Shaxboz", age: 22, job: "Front-end mentor"}
const person2 = {name: "Islom", age: 21, job: "Front-end engineer"}

bind(person1, logPerson)();
bind(person2, logPerson)();


