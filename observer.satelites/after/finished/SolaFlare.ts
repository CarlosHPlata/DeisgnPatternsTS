import ISubscriber from "./IEarthMonitor";
import OrbitalSatelite from "./OrbitalSatelite";

export default class SolarFlare implements ISubscriber {

    constructor (
        private orbitalSatelite: OrbitalSatelite
    ) {
        this.orbitalSatelite.subscribe( this );
    }

    onUpdate(solarHeat: number): void {
        if (solarHeat >= 400) {
            console.log("\n\n================================================================================");
            console.log(`Se detecto una erupcion solar con ${solarHeat} mil grados centigrados`);
            console.log("================================================================================");
        }
    }
}
