import { Observable, fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    throttleTime(3000)
).subscribe(console.log);

const input: HTMLInputElement = document.createElement('input');
document.querySelector('body').append(input);

const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);