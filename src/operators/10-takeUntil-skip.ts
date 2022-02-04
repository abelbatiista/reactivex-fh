import { interval, Observable, observable, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button: HTMLButtonElement = document.createElement('button');
button.innerHTML = 'STOP';
document.querySelector('body').append(button);

const counter$: Observable<number> = interval(1000);
// const buttonClick$: Observable<Event> = fromEvent<Event>(button, 'click');
const buttonClick$: Observable<Event> = fromEvent<Event>(button, 'click').pipe(
    tap((): void => {console.log('[tap] - before skip');}),
    skip(1),
    tap((): void => {console.log('[tap] - after skip');}),
);

counter$.pipe(
    takeUntil(buttonClick$)
).subscribe({
    next: (data: number): void => {console.log('[next] ', data);},
    error: null,
    complete: (): void => {console.log('[complete]');}
});

