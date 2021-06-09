import ICoffee from "./interfaces/ICoffee";

export default class AmericanCoffee implements ICoffee {

    printName(): string {
        return "Coffee";
    }


    getPrice(): number {
        return 1;
    }

}
