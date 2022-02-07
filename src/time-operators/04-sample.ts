import { observable, Observable, fromEvent, interval } from 'rxjs';
import { sample } from "rxjs/operators";

const interval$: Observable<any> = interval(5000);
const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);