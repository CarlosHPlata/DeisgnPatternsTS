import GameState from "./GameState";

export default class Pokemon {

    performAttack(attackType: string, gameState: GameState): GameState {

        if (attackType == "ataque trueno") {
            gameState.enemy.hp = gameState.enemy.hp - 20;

        } else if (attackType == "danza lluvia") {
            gameState.weather = "empezo a llover ⛈️🌧️";

        } else if (attackType == "bola de fuego") {
            gameState.enemy.hp = gameState.enemy.hp -10;
            gameState.enemy.state = "El enemigo esta quemado 🔥🔥";
            setTimeout(() => {
                console.log('Tu enemigo esta quemado 🔥 y recibe -10 pts');
                gameState.enemy.hp = gameState.enemy.hp -10;
                gameState.enemy.state = "";
                console.log(gameState);
            }, 1000);

        } else if (attackType == "Golpe fuerte") {
            gameState.enemy.hp = gameState.enemy.hp - 20;
            gameState.enemy.state = "El enemigo esta aturdido 💫😵";
            
        } else if (attackType == "terremoto") {
            gameState.enemy.hp = gameState.enemy.hp - 20;
            gameState.weather = "El suelo tiembla 💢";

        } else if (attackType == "Golpe pesadilla") {
            if (gameState.enemy.state == "el enemigo esta dormido 😴") {
                gameState.enemy.hp = -50;
                gameState.enemy.state = "";
            } else {
                gameState.enemy.state = "el enemigo esta dormido 😴";
            }

        } else if (attackType == "danza solar") {
            gameState.enemy.hp = gameState.enemy.hp - 20;

        }

        return gameState;
    }

}