import { fromEvent, interval, mergeMap, Observable, switchMap } from "rxjs";

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
const interval$: Observable<number> = interval(1000);

// mergeMap example

// click$.pipe(
//     mergeMap((): Observable<number> => {
//         return interval$;
//     })
// ).subscribe(console.log);

// ----------------------------------------

// switchMap example

click$.pipe(
    switchMap((): Observable<number> => {
        return interval$;
    })
).subscribe(console.log);