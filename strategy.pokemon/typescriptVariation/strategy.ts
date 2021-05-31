export default class Context {

    constructor(
        private doStrategy: (text:string) => void
    ) {}

    performStrategy() {
        const text = "Hola usando strategy con variacion funcional";

        if (this.doStrategy) {
            this.doStrategy(text);
        }
    }
}

const strat = (text) => { console.log(text) };
let hello = " this is a message ";
const strat2 = (text) => { hello += text };

const conext: Context = new Context(strat);