import GameState from "../GameState";
import IAttack from "./IAttack";

export default class Terremoto implements IAttack {
    name: string = "Terremoto";

    executeAttack(gameState: GameState): GameState {
        gameState.enemy.hp = gameState.enemy.hp - 20;
        gameState.weather = "El suelo tiembla 💢";

        return gameState;
    }
}
