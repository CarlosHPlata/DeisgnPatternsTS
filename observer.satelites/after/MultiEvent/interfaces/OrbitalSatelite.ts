import IEarthMonitor from "./IEarthMonitor";
import {AlienShip, Meteor, UniverseState} from "./UniverseState";

export default abstract class OrbitalSatelite {

    private subscribers: IEarthMonitor[] = [];

    addMonitor( subscriber: IEarthMonitor ): void {
        if ( this.subscribers.filter(s => s === subscriber).length === 0 ) {
            this.subscribers.push(subscriber);
        }
    }

    detachMonitor( subscriber: IEarthMonitor ): void {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }


    notifySunHeatChange( sunHeat:number ): void {
        console.log('\n\n\n------------------------------ NEW ROUND OF EVENTS --------------------------------\n\n');
        for (let subscriber of this.subscribers) {
            subscriber.onSunHeatVariation( sunHeat );
        }
    }

    notifyAlienDetected( alien: AlienShip ): void {
        console.log('\n\n\n------------------------------ NEW ROUND OF EVENTS --------------------------------\n\n');
        for (let subscriber of this.subscribers) {
            subscriber.onAlienDetected( alien );
        }
    }

    notifyMeteorDetected( meteor: Meteor ): void {
        console.log('\n\n\n------------------------------ NEW ROUND OF EVENTS --------------------------------\n\n');
        for (let subscriber of this.subscribers) {
            subscriber.onMeteorDetected( meteor );
        }
    }

}
