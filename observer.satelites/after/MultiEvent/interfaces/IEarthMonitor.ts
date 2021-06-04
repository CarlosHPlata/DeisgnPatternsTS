import {AlienShip, Meteor, UniverseState} from "./UniverseState";

export default abstract class IEarthMonitor {
    onMeteorDetected(meteor: Meteor): void { }

    onAlienDetected(alienship: AlienShip): void { }

    onSunHeatVariation( sunHeat: number ): void { }
}
