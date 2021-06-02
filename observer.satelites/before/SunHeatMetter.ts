export default class SunHeatMetter {


    private heat: number;

    printHeat() {
        console.log(this.heat);
    }

    setHeat(heat: number) {
        this.heat = heat;
    }
}
