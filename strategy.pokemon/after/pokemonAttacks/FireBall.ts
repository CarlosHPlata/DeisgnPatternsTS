import GameState from "../GameState";
import IAttack from "./IAttack";

export default class FireBall implements IAttack {
    name: string = "Bola de Fuego";

    executeAttack(gameState: GameState): GameState {
        gameState.enemy.hp = gameState.enemy.hp -10;
        gameState.enemy.state = "El enemigo esta quemado 🔥🔥";
        setTimeout(() => {
            console.log("\n\n-------------------------------------");
            console.log('Por efecto de quemadura: Tu enemigo esta quemado 🔥 y recibe -10 pts');
            gameState.enemy.hp = gameState.enemy.hp -10;
            gameState.enemy.state = "";
            console.log(gameState);
        }, 1000);

        return gameState;
    }
}
