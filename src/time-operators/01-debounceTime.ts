import { Observable, fromEvent, Observer } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (data: string): void => {console.log('[next] ', data);},
    error: null,
    complete: (): void => {console.log('[complete]');}
}

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe()

// 2nd Example
const input: HTMLInputElement = document.createElement('input');
document.querySelector('body').append(input);

const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
    // map<KeyboardEvent, string>(({key}): string => {
    //     return key;
    // })
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);