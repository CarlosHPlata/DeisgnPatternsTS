import ICoffee from "../interfaces/ICoffee";

export default abstract class CoffeeWithTopping implements ICoffee {

    constructor(
        protected coffee: ICoffee
    ) {}

    abstract printName(): string;
    abstract getPrice(): number;
}
