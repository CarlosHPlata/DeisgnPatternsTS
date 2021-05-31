import GameState from "./GameState";
import Pokemon from "./Pokemon";

const gameState: GameState = {enemy: {hp: 500, state: ""}, weather: "cielos despejados ☀☀"};
console.log('Game start', gameState);

const pikachu: Pokemon = new Pokemon();
console.log("\n\nPikachu lanza ataque terremoto!!!!!!!!");
pikachu.performAttack("terremoto", gameState);

console.log(gameState);
