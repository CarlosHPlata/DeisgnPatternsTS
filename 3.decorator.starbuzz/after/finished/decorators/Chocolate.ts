import CoffeeWithTopping from "./CoffeWithTopping";

export default class Chocolate extends CoffeeWithTopping {

    printName(): string {
        return `${this.coffee.printName()} / with chocolate`;
    }


    getPrice(): number {
        return this.coffee.getPrice() + 0.3;
    }
}
