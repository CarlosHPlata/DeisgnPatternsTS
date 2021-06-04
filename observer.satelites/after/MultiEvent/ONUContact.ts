import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import {AlienShip, UniverseState} from "./interfaces/UniverseState";

export default class ONUContact extends IEarthMonitor {

    constructor(
        private orbitalSatelite: OrbitalSatelite
    ) {
        super();
        this.orbitalSatelite.addMonitor(this);
    }


    //@override
    onAlienDetected(alien: AlienShip) {
        if (alien.isAlly) {
            console.log("\n\n================================================================================");
            console.log(`${alien.name} entro en orbita terrestre, queremos hacer contacto con ustedes`);
            console.log("================================================================================");
        }
    }
}
