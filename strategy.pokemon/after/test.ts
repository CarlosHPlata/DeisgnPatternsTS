import GameState from "./GameState";
import Pokemon from "./Pokemon";
import RainDance from "./pokemonAttacks/RainDance";
import SolarFlare from "./pokemonAttacks/SolarFlare";
import NightMareAttack from "./pokemonAttacks/NightmareAttack";
import FireBall from "./pokemonAttacks/FireBall";
import StrongPunch from "./pokemonAttacks/StrongPunch";

// seteando el juego en general ------------------
const gameState: GameState = {enemy: {hp: 500, state: ""}, weather: "cielos despejados ☀☀"};
console.log('Game start', gameState);
// ------------------



const mewTwo: Pokemon = new Pokemon("Mew Two");

mewTwo.setAttack(new RainDance());
mewTwo.performAttack(gameState);
console.log(gameState);


mewTwo.setAttack(new SolarFlare());
mewTwo.performAttack(gameState);
console.log(gameState);


mewTwo.setAttack(new NightMareAttack());
mewTwo.performAttack(gameState);
console.log(gameState);

mewTwo.performAttack(gameState);
console.log(gameState);

mewTwo.setAttack(new FireBall());
mewTwo.performAttack(gameState);
console.log(gameState);

mewTwo.setAttack(new StrongPunch());
mewTwo.performAttack(gameState);
console.log(gameState);