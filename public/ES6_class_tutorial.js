class Vehicle {
    constructor(){
        this.wheels = 4;
        this.model = 'sedan';
    }
}
let ford = new Vehicle();
console.log(ford.wheels);

//chaining classes
class Tesla extends Vehicle {
    constructor(){
        super();        //injects 'Vehicle' class to constructor
        this.engine = 'electro';
    }
}
let myCar = new Tesla();
console.log(JSON.stringify(myCar));

