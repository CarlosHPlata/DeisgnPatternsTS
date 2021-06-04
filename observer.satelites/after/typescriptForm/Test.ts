import Observable from "./Observable";


const ob: Observable = new Observable();

ob.subscribe((text) => {
    console.log(text);
}).subscribe((text) => {
    console.log('segundo ' + text);
}).doSomething();