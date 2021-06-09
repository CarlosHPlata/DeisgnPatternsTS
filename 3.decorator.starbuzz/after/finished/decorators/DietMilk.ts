import CoffeeWithTopping from "./CoffeWithTopping";

export default class DietMilk extends CoffeeWithTopping {

    printName(): string {
        return `${this.coffee.printName()} / with DietMilk`;
    }

    getPrice(): number {
        return this.coffee.getPrice() + 1.5;
    }

}
