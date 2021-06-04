import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import {Meteor, UniverseState} from "./interfaces/UniverseState";

export default class MeteorRegister extends IEarthMonitor {
    
    private meteors: Meteor[] = [];

    constructor(
        private orbitalSatelite: OrbitalSatelite
    ) {
        super();
        this.orbitalSatelite.addMonitor(this);
    }

    onMeteorDetected(meteor: Meteor) {
        if ( this.meteors.filter(m => m.name === meteor.name).length > 0 ) {
            this.meteors = [ ...this.meteors.filter(m => m.name !== meteor.name), meteor ];
        } else {
            this.meteors.push(meteor);
        }

        console.log("\n\n================================================================================");
        console.log(`Actualmente estamos monitoreando ${this.meteors.length} posibles objetos cerca de la tierra`);
        this.meteors.forEach(meteor => {
            console.log(`\t- ${meteor.name} con una proximidad de: ${meteor.proximity} kilometros`);
        });
        console.log("================================================================================");
    }

}
