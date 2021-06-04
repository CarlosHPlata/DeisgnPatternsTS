import SolarFlare from "./SolaFlare";
import SunHeatMetter from "./SunHeatMetter";
import Voyager from "./Voyager";

const voyager: Voyager = new Voyager ();

const solarFlare: SolarFlare = new SolarFlare( voyager );
const heatMetter: SunHeatMetter = new SunHeatMetter( voyager );

console.log('empezando la exploracion espacial');

voyager.exploreSpace()
.then(() => console.log('la exploracion termino'))
.catch(e => console.log(e))