import { fromEvent, Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: null
};

const source1$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
const source2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

source1$.subscribe(({x, y}: PointerEvent): void => {
    console.log(x, y);
});
source2$.subscribe((event: KeyboardEvent): void => {
    console.log(event.key);
});