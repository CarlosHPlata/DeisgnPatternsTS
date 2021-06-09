import CoffeeWithTopping from "./CoffeWithTopping";

export default class Milk extends CoffeeWithTopping {

    printName(): string {
        return `${this.coffee.printName()} / with milk`;
    }


    getPrice(): number {
        return this.coffee.getPrice() + 1;
    }
}
