//Ellen Carey CSD 122 Assignment 3a
//Vehicle class
//constructors: year, make, model, speed passengers.
//methods: accelerate,brake, getSpeed
//Van class, extends vehicle. passengers = 8, 
//methods: overrided accelerate method
//SportsCar class extends Vehicle. passengers = 2
//methods: overrided accelerate method. 
class Vehicle {

    //vehicle constructor
    constructor(year, make, model, speed, passengers) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.speed = speed;
        this.passengers = passengers;
    }

    //method accelerate
    accelerate() {
        this.speed += 5;
    }
    //method brake
    brake() {
        this.speed -= 5;
    }
    //method getSpeed
    getSpeed() {
        return this.speed;
    }
}
class Van extends Vehicle {

    //constructor for van
    constructor(year, make, model, speed) {
        super(year, make, model, speed, 8);
    }
    //overrided accelerate method for van
    accelerate() {
        this.speed += 3;
    }
}
class SportsCar extends Vehicle {
    //constructor for SportsCar
    constructor(year, make, model, speed) {
        super(year, make, model, speed, 2);
    }
    //overrided accelerate method for SportsCar
    accelerate() {
        this.speed += 10;
    }
}
//instantiating van
var van = new Van("1999", "Chrysler", "Town and Country", 40);
//instantiating sportsCar
var sportsCar = new SportsCar("1994", "Nissan", "300ZX", 72);
van.accelerate();
van.accelerate();
van.accelerate();
van.brake();
console.log(van.getSpeed());
sportsCar.accelerate();
sportsCar.accelerate();
sportsCar.accelerate();
sportsCar.brake();
console.log(sportsCar.getSpeed());