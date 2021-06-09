import AmericanCoffee from "./AmericanCoffee";
import Chocolate from "./decorators/Chocolate";
import Milk from "./decorators/Milk";
import ICoffee from "./interfaces/ICoffee";

let coffee1: ICoffee = new AmericanCoffee();
coffee1 = new Milk( coffee1 );
coffee1 = new Chocolate( coffee1 );

console.log( coffee1.printName() );
console.log( coffee1.getPrice() + " pesos" );
