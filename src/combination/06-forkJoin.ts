import { interval, Observable, of, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";

const numbers$: Observable<number> = of(1, 2, 3, 4);
const interval$: Observable<number> = interval(1000).pipe(take(3));
const letters$: Observable<string> = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numbers$,
//     interval$,
//     letters$
// ).subscribe(console.log);

// forkJoin(
//     numbers$,
//     interval$,
//     letters$
// ).subscribe((data: any[]): void => {
//     console.log('numbers', data[0])
//     console.log('interval', data[1])
//     console.log('letters', data[2])
// });

// forkJoin({
//     numbers$,
//     interval$,
//     letters$
// }).subscribe(console.log)

forkJoin({
    num: numbers$,
    int: interval$,
    let: letters$
}).subscribe(console.log)