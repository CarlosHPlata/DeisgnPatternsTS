import CoffeeWithTopping from "./CoffeWithTopping";

export default class WhippedCream extends CoffeeWithTopping {

    printName(): string {
        return `${this.coffee.printName()} / with Whipped Cream`;
    }

    getPrice(): number {
        return this.coffee.getPrice() + 0.7;
    }

}
