
export interface Meteor {
    name: string;
    proximity: number;
}

export interface AlienShip {
    name: string;
    isAlly: boolean;
}


export interface UniverseState {
   visibleMeteors: Meteor[];
   aliens: AlienShip[];
   sunHeat: number;
}
