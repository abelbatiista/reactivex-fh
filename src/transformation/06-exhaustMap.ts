import { fromEvent, interval, Observable } from "rxjs";
import { concatMap, take, exhaustMap } from "rxjs/operators";

const interval$: Observable<number> = interval(1000).pipe(
    take(3)
);

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    exhaustMap((): Observable<number> => {
        return interval$;
    })
).subscribe(console.log);