import CoffeeWithTopping from "./CoffeWithTopping";

export default class DoubleShot extends CoffeeWithTopping {

    printName(): string {
        return `${this.coffee.printName()} / with double shot`;
    }

    getPrice(): number {
        return this.coffee.getPrice() + 0.3;
    }

}
