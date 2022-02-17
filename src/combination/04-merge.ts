import { from, fromEvent, Observable, merge } from "rxjs";
import { pluck } from "rxjs/operators";

const keyup$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');
const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

merge(
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type')), 
).subscribe(console.log);