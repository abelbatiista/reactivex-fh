import { first, take } from 'rxjs/operators';
import { fromEvent, Observable, observable } from "rxjs";

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

// click$.subscribe((data: PointerEvent): void => {console.log(data);});

click$.pipe(
    // take(1),
    first<PointerEvent>((data: PointerEvent): boolean => {
        return data.clientY >= 500;
    })
).subscribe({
    next: (data: PointerEvent): void => {console.log('[next] ', data);},
    error: null,
    complete: (): void => {console.log('[complete]');}
});