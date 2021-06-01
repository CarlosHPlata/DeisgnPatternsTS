import GameState from "./GameState";
import IAttack from "./pokemonAttacks/IAttack";

export default class Pokemon {

    private attack: IAttack;

    constructor (
        private name: string
    ) {
        this.attack = {name: "splash", executeAttack: (gameState) => {console.log("tu pokemon uso splash 💦... no hizo nada"); return gameState}};
    }

    setAttack(attack: IAttack): void {
        this.attack = attack;
    }

    performAttack(gameState: GameState): GameState {
        console.log("\n\n-------------------------------------");
        console.log(`${this.name} uso ${this.attack.name}`);

        return this.attack.executeAttack(gameState);
    }

}
