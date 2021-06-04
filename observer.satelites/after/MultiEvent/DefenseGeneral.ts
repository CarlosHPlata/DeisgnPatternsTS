import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import {AlienShip, UniverseState} from "./interfaces/UniverseState";

export default class DefenseGeneral extends IEarthMonitor {

    constructor(
        private orbitalSatelite: OrbitalSatelite
    ) {
        super();
        this.orbitalSatelite.addMonitor(this);
    }


    onAlienDetected(alienShip: AlienShip): void {
        if ( !alienShip.isAlly ) {
            console.log("\n\n================================================================================");
            console.log(`Una nave alienigena enemiga (${alienShip.name}) ha entrado en orbita terrestre, disparen los canones orbitales`);
            console.log("================================================================================");
        }
    }
}
