import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import {UniverseState} from "./interfaces/UniverseState";

export default class SolarFlareMetter extends IEarthMonitor {
    
    constructor(
        private orbitalSatelite: OrbitalSatelite
    ) {
        super();
        this.orbitalSatelite.addMonitor(this);
    }

    onSunHeatVariation(sunHeat: number) {
        if (sunHeat >= 400) {
            console.log("\n\n================================================================================");
            console.log(`Se detecto una erupcion solar con ${sunHeat} mil grados centigrados`);
            console.log("================================================================================");
        }
    }

}
