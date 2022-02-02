import { asyncScheduler } from "rxjs";

setTimeout(() => {}, 3000);
setInterval(() => {}, 3000);

const greeting: () => void = () => {
    console.log('Hello');
}

const greetingSomeone: (string) => void = (name: string): void => {
    console.log(`Hello ${name}`);
}

// asyncScheduler.schedule(greeting, 2000); // function without arguments
// asyncScheduler.schedule(greetingSomeone, 2000, 'ABel');

// const nonLambda = function(state: any): void {
//     console.log('state', state);
// }

const schedule = asyncScheduler.schedule(function(state: any): void {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout((): void => {
//     schedule.unsubscribe();
// }, 10000);

asyncScheduler.schedule((): void => { schedule.unsubscribe }, 10000);