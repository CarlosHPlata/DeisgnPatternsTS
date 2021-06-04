import IEarthMonitor from "./IEarthMonitor";

export default abstract class OrbitalSatelite {

    private subscribers: IEarthMonitor[] = [];


    subscribe(subscriber: IEarthMonitor) {
        if ( this.subscribers.filter(s => s === subscriber).length > 0 )
            return;

        this.subscribers.push(subscriber);
    }


    unSubscribe(subscriber: IEarthMonitor) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }


    protected notiffyHeatChange(sunHeat: number) {
        for ( let sub of this.subscribers ) {
            sub.onUpdate(sunHeat);
        }
    }

}
