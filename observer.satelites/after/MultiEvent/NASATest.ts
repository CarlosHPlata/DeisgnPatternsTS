import DefenseGeneral from "./DefenseGeneral";
import InminentDead from "./InminentDead";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";
import MeteorRegister from "./MeteorsRegister";
import ONUContact from "./ONUContact";
import SolarFlareMetter from "./SolarFlareMetter";
import SunHeatMetter from "./SunHeatMetter";
import Voyager from "./Voyager";

const triggerEventInSpace = (evento: () => void) => {
    setTimeout(() => evento(), 5000);
}

//-------------- instanciando nuestro satelite orbital -------------
const satelite: Voyager = new Voyager();

//------------- instanciando nuestros instrumentos
const general: DefenseGeneral = new DefenseGeneral(satelite);
const deathMonitor: InminentDead = new InminentDead(satelite);
const meteorsMetter: MeteorRegister = new MeteorRegister(satelite);
const contacter: ONUContact = new ONUContact(satelite);
const solarFlareMetter: SolarFlareMetter = new SolarFlareMetter(satelite);
const sunHeatMetter: SunHeatMetter = new SunHeatMetter(satelite);

//------- testeando nuevos eventos

console.log('iniciando la exploracion espacial');
triggerEventInSpace(() => satelite.setSunHeat(100));
triggerEventInSpace(() => satelite.newMeteorClose({name: "B123", proximity: 400}));
triggerEventInSpace(() => satelite.newMeteorClose({name: "A8756", proximity: 1000}));
triggerEventInSpace(() => satelite.newAlienOnOrbit({name: "Gungans", isAlly: true}));
triggerEventInSpace(() => satelite.newAlienOnOrbit({name: "Ewooks ARRGGG!", isAlly: true}));
triggerEventInSpace(() => satelite.setSunHeat(500));
triggerEventInSpace(() => satelite.newAlienOnOrbit({name: "Predators", isAlly: false}));
triggerEventInSpace(() => satelite.newMeteorClose({name: "GH650", proximity: 20}));
triggerEventInSpace(() => satelite.setSunHeat(300));