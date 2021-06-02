export default class Voyager {

    async exploreSpace() {
        for (let i = 0; i<=4;  i++) {
            let heat = await this.detectNewHeat();
            console.log('\n\n------------------------------------------------\n\n');
        }
    }

    private detectNewHeat(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const heat = Math.floor( Math.random() * (700 - 100 + 1) + 100 );
                resolve(heat);
            }, 2000)
        });
    }

}
