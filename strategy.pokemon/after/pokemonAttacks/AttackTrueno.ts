import GameState from "../GameState";
import IAttack from "./IAttack";

export default class AttackTrueno implements IAttack {
    name: string = "Ataque Trueno";

    executeAttack(gameState: GameState): GameState {
        gameState.enemy.hp = gameState.enemy.hp - 20;
        return gameState;
    }

}
