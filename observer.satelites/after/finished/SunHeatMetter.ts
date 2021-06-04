import IEarthMonitor from "./IEarthMonitor";
import OrbitalSatelite from "./OrbitalSatelite";

export default class SunHeatMetter implements IEarthMonitor {

    private currentHeat: number = 0;
    private minHeat: number = 999999;
    private maxHeat: number = -999999;

    constructor(
        private satelite: OrbitalSatelite
    ) {
        this.satelite.subscribe( this );
    }
    
    onUpdate(solarHeat: number): void {
        this.currentHeat = solarHeat;
        this.minHeat = solarHeat < this.minHeat? solarHeat : this.minHeat;
        this.maxHeat = solarHeat > this.maxHeat? solarHeat : this.maxHeat;

        console.log("\n\n================================================================================");
        console.log(`Una variacion en la temperatura del sol se ha detectado`);
        console.log(`La temperatura actual del sol es: ${this.currentHeat} mil grados centigrados`);
        console.log(`La temperatura minima registrada es: ${this.minHeat} mil grados centigrados`);
        console.log(`La temperatura maxima registrada es: ${this.maxHeat} mil grados centigrados`);
        console.log("================================================================================");
    }

}
