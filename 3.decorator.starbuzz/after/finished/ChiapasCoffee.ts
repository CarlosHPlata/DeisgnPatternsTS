import ICoffee from "./interfaces/ICoffee";

export default class ChiapasCoffee implements ICoffee {

    printName(): string {
        return "Chiapas Coffee";
    }


    getPrice(): number {
        return 1.5;
    }

}
