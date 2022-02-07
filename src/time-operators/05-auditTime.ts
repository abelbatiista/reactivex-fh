import { Observable, fromEvent } from 'rxjs';
import { auditTime, tap, map } from "rxjs/operators";

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map((data: PointerEvent): {x: number, y: number} => {
        return {x: data.x, y: data.y}
    }),
    tap((data: {x: number, y: number}): void => {
        console.log('[tap] ', data);
    }),
    auditTime(2000)
).subscribe(console.log);