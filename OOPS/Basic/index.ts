// Create a new class Car with:
// brand: string
// year: number
// a method drive() that prints Driving a BRAND from YEAR.
// Create an object and call the method.

class Car{
    brand:String
    year:Number
    constructor(brand:String,year:number){
        this.brand = brand
        this.year = year
    }
    drive(){
        console.log(`Driving a ${this.brand} from ${this.year}`)
    }
}
let car1 = new Car("BMW",2024)
let car2 = new Car("AUDI",2025)
car1.drive()
car2.drive()