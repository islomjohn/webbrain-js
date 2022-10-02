/* class Car {
  constructor(car, color, price) {
    this.car = car
    this.color = color
    this.price = price
  }
  getInfo() {
    return `Your car is ${this.car} color ${this.color} and price ${this.price}`
  }
}

var nexia = new Car("Nexia", "red", 6000)
console.log(nexia.getInfo()); */

class Car {
  constructor(name) {
    this.name = name
  }
  getName() {
    return `Your car is ${this.name}`
  }
}

class MoreInfo extends Car {
  constructor(name, color, price){
    super(name)
    this.color = color
    this.price = price
  }
  getFullInfo() {
    return `${this.getName()} color ${this.color} and price ${this.price}`
  }
}

var car = new MoreInfo('Cobalt', "red", 5000)
console.log(car.getFullInfo());