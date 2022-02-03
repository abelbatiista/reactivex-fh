import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

// reduce: javascript

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator: number, realValue: number) => {
    return accumulator + realValue;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total: ', total);

// *********************************

// reduce: typescript

interval(1000).pipe(
    take(5),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: (data: any): void => { console.log('[next]: ', data); },
    error: null,
    complete: (): void => { console.log('[completed]'); }
});