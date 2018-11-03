


//Can Tosun
//CSD 122 JS $ JQ


class Vehicle //creating a parent class name vehicle 
{
    constructor(year, make, model, speed) //parent class contructor contains year,make,model,speed 
    {
        this.year = year; //initilaze all parameters 
        this.make = make;
        this.model = model;
        this.speed = speed;

        //get speed function is a prototype, bcuz we will cal for other other classes too 
        //this function will be base for other class 
        Vehicle.prototype.getSpeed = function () {
            return this.speed;
        };

        //break function is a prototype too beacuse break -5 never changes. so it should be prototype 
        //this function will be base for other class 
        Vehicle.prototype.break = function () {
            console.info("Braking, now speed is: " + (this.speed -= 5) + "<br>");
        };

        //each car accelerate different value, this is just a function 
        //it s not goona base for other classes, we will override down there 
        this.accelerate = function () {
            console.info("Accelerating, now speed is: " + (this.speed += 5) + "<br>");
        }

    }
}

class Van extends Vehicle //van is a child class for vehicle 
{
    //Van should include all things that vehicle has, except it accelerates by only adding 3 and it has passengers = 8 
    constructor(year, make, model, speed, passangers) {
        super(year, make, model, speed, passangers);
        this.passangers = 8; //initilize passanger to 8 

        //call accelerate function wit +3 speed 
        this.accelerate = function () {
            console.info("Accelerating, now speed is: " + (this.speed += 3) + "<br>");
        }
    }

}

class SportsCar extends Vehicle {
    //SportsCar should have all things that vehicle has, except it accelerates by adding 10 and it has passengers = 2 
    constructor(year, make, model, speed, passangers) {
        super(year, make, model, speed, passangers);
        this.passangers = 2; //initilize passanger to 2 

        //call accelerate function wit +10 speed 
        this.accelerate = function () {
            console.info("Accelerating, now speed is: " + (this.speed += 10) + "<br>");
        }
    }

}

var car1 = new Vehicle(2017, 'Ford', 'Fiesta', 100); //create reference and object for vehicle 
var car2 = new Van(2005, 'Chevrolet', 'Chevy', 40); //create reference and object for Van 
var car3 = new SportsCar(2014, 'Bugatti', 'Veyron', 200); //create reference and object for SportsCar 

//outputs

console.info(car1.year + " year " + car1.make + " " + car1.model);
console.info("<br>");
console.info("Current speed is: " + car1.getSpeed() + "<br>");
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.break();
car1.accelerate();
car1.break();
console.info("Current speed is: " + car1.getSpeed() + "<br>");

console.info("-----------------------------------------------<br>");

console.info(car2.year + " year " + car2.make + " " + car2.model + " has " + car2.passangers + " people capacity.");
console.info("<br>");
console.info("Current speed is: " + car2.getSpeed() + "<br>");
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.break();
car2.accelerate();
car2.break();
console.info(car2.getSpeed());

// console.info("-----------------------------------------------<br>");

// console.info(car3.year + " year " + car3.make + " " + car3.model + " has " + car3.passangers + " people capacity.");
// console.info("<br>");
// console.info("Current speed is: " + car3.getSpeed() + "<br>");
// car3.accelerate();
// car3.accelerate();
// car3.accelerate();
// car3.break();
// car3.accelerate();
// car3.break();
// console.info("Current speed is: " + car3.getSpeed() + "<br>");






