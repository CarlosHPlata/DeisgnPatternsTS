import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import {Meteor, UniverseState} from "./interfaces/UniverseState";

export default class InminentDead extends IEarthMonitor {

    constructor(
        private orbitalSatelite: OrbitalSatelite
    ) {
        super();
        this.orbitalSatelite.addMonitor(this);
    }

    onMeteorDetected(meteor: Meteor): void {
        if (meteor.proximity < 100) {
            console.log("\n\n================================================================================");
            console.log(`SE DETECTO A ${meteor.name} CON UNA PROXIMIDAD DE ${meteor.proximity} KILOMETROS!!!!!!!!!!!!!!`);
            console.log('Todo termino senores no tenemos escapatoria!!!!!!!!!!!!!!!!');
            console.log("================================================================================");
        }
    }
}
