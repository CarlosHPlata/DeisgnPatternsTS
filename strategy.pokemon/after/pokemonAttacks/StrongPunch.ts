import GameState from "../GameState";
import IAttack from "./IAttack";

export default class StrongPunch implements IAttack {
    name: string = "Golpe Fuerte";

    executeAttack(gameState: GameState): GameState {
        gameState.enemy.hp = gameState.enemy.hp - 20;
        gameState.enemy.state = "El enemigo esta aturdido 💫😵";

        return gameState;
    }
}
