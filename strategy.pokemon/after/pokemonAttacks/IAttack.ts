import GameState from "../GameState";

export default interface IAttack {
    name: string;
    executeAttack(gameState:GameState): GameState;
}
