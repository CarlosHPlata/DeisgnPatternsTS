import GameState from "./GameState";

export default class Pokemon {

    performAttack(attackType: string, gameState: GameState): GameState {

        if (attackType == "ataque trueno") {
            gameState.enemy.hp = gameState.enemy.hp - 20;

        } else if (attackType == "danza lluvia") {
            gameState.weather = "empezo a llover ⛈⛈⛈";

        } else if (attackType == "bola de fuego") {
            gameState.enemy.hp = gameState.enemy.hp -10;
            gameState.enemy.state = "Tu pokemon esta quemado";
            setTimeout(() => {
                gameState.enemy.hp = gameState.enemy.hp -10;
                gameState.enemy.state = "";
            }, 1000);

        } else if (attackType == "cascada") {
            gameState.enemy.hp = gameState.enemy.hp - 20;
            
        } else if (attackType == "terremoto") {
            gameState.enemy.hp = gameState.enemy.hp - 20;
            gameState.weather = "El suelo tiembla";

        } else if (attackType == "hojas filosas") {
            gameState.enemy.hp = gameState.enemy.hp - 20;

        } else if (attackType == "danza solar") {
            gameState.enemy.hp = gameState.enemy.hp - 20;

        }

        return gameState;
    }

}