import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import {AlienShip, Meteor, UniverseState} from "./interfaces/UniverseState";

export default class Voyager extends OrbitalSatelite {

    private observableUniverse: UniverseState;

    constructor() {
        super();
        this.observableUniverse = {aliens: [], visibleMeteors: [], sunHeat: 100};
    }


    newAlienOnOrbit( alien: AlienShip ): void {
        this.observableUniverse.aliens.push( alien );
        this.notifyAlienDetected(alien);
    }

    newMeteorClose( meteor: Meteor ): void {
        this.observableUniverse.visibleMeteors.push( meteor );
        this.notifyMeteorDetected(meteor);
    }
 
    setSunHeat( sunHeat: number ): void {
        this.observableUniverse.sunHeat = sunHeat;
        this.notifySunHeatChange(sunHeat);
    }

}
