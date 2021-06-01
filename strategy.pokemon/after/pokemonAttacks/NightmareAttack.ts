import GameState from "../GameState";
import IAttack from "./IAttack";

export default class NightmareAttack implements IAttack {
    name: string = "Golpe Pesadilla";

    executeAttack(gameState: GameState): GameState {
        if (gameState.enemy.state == "el enemigo esta dormido 😴") {
            gameState.enemy.hp = gameState.enemy.hp -50;
            gameState.enemy.state = "";
        } else {
            gameState.enemy.state = "el enemigo esta dormido 😴";
        }

        return gameState;
    }
}
