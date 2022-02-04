import { takeWhile, map } from "rxjs/operators";
import { fromEvent, Observable } from "rxjs";

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x, y}): any => {
        return {
            x,
            y
        }
    }),
    takeWhile(({x, y}): boolean => {
        return y <= 150;
    }, true) // this boolean is for print the last value
).subscribe({
    next: (data: PointerEvent): void => {console.log('[next] ', data);},
    error: null,
    complete: (): void => {console.log('[complete]');}
})