import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";

export default class SunHeatMetter extends IEarthMonitor {

    private currentHeat: number = 0;
    private minHeat: number = 999999;
    private maxHeat: number = 0;

    constructor(
        private orbitalSatelite: OrbitalSatelite
    ) {
        super();
        this.orbitalSatelite.addMonitor(this);
    }


    onSunHeatVariation(sunHeat: number) {
        this.currentHeat = sunHeat;
        this.minHeat = sunHeat < this.minHeat? sunHeat : this.minHeat;
        this.maxHeat = sunHeat > this.maxHeat? sunHeat : this.maxHeat;

        console.log("\n\n================================================================================");
        console.log(`Una variacion en la temperatura del sol se ha detectado`);
        console.log(`La temperatura actual del sol es: ${this.currentHeat} mil grados centigrados`);
        console.log(`La temperatura minima registrada es: ${this.minHeat} mil grados centigrados`);
        console.log(`La temperatura maxima registrada es: ${this.maxHeat} mil grados centigrados`);
        console.log("================================================================================");
    }
}