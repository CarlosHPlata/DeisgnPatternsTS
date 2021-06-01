import GameState from "../GameState";
import IAttack from "./IAttack";

export default class SolarFlare implements IAttack {
    name: string = "Rayo Solar";

    executeAttack(gameState: GameState): GameState {
        console.log('tu pokemon esta cargando un ataque 🌻🌄');
        setTimeout(() => {
            console.log("\n\n-------------------------------------");
            console.log("Por efecto de Rayo Solar: Tu pokemon a lanzado un potente rayo solar 💥☄️");
            gameState.enemy.hp = gameState.enemy.hp - 100;
            gameState.weather = "Esta enteramente soleado ☀️☀️";
            console.log(gameState);
        }, 1000);

        return gameState;
    }
}
