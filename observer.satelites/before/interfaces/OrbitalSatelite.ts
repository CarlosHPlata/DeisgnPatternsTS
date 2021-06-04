import IEarthMonitor from "./IEarthMonitor";

export default abstract class OrbitalSatelite {

    private systems: IEarthMonitor[] = [];

    subscribe(subcriber: IEarthMonitor) {
        this.systems.push(subcriber);
    }

    unSubscribe(subscriber: IEarthMonitor) {
        this.systems = this.systems.filter(s => s !== subscriber);
    }

    protected notifyHeatChange( sunHeat: number ) {
        for (const subs of this.systems) {
            subs.onUpdate(sunHeat);
        }
    }

}