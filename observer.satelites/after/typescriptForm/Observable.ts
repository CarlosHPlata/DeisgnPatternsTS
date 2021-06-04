export type subscriber = (test: string) => void;

export default class Observable {

    private subscribers: subscriber[] = [];


    subscribe(subscriber: subscriber): Observable {
        this.subscribers.push(subscriber);
        return this;
    }

    doSomething() {
        for( let sub of this.subscribers) {
            sub("hello world");
        }
    }

}