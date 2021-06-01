import GameState from "../GameState";
import IAttack from "./IAttack";

export default class RainDance implements IAttack {
    name: string = "Danza lluvia";

    executeAttack(gameState:GameState): GameState {
        gameState.weather = "esta lloviendo ⛈️🌧️";
        return gameState;
    }
}
