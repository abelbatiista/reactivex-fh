import { from, fromEvent, Observable, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";

// old implementation

// const keyup$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');
// const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

// combineLatest(
//     keyup$.pipe(pluck('type')), 
//     click$.pipe(pluck('type')), 
// ).subscribe(console.log);

//new implementation

const input1: HTMLInputElement = document.createElement('input');
const input2: HTMLInputElement = document.createElement('input');

input1.type = 'email';
input1.placeholder = 'Email';

input2.type = 'password';
input2.placeholder = '********';

document.querySelector('body').append(input1, input2);

// helper
const getInputStream: (element: HTMLElement) => Observable<any> = 
    (element: HTMLElement): Observable<any> => {
        return fromEvent<KeyboardEvent>(element, 'keyup').pipe(
            pluck('target', 'value')
        );
}

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);
