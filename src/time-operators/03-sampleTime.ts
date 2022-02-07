import { Observable, fromEvent } from 'rxjs';
import { sampleTime, map } from "rxjs/operators";

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x, y}): {x: number, y: number} => {
        return ({x, y});
    }),
    sampleTime(2000)
).subscribe(console.log);