import { take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const numbers$: Observable<number> = of(1, 2, 3, 4, 5);

numbers$.pipe(
    tap((data: number): void => {console.log('[tap] ', data);}),
    take(3)
).subscribe({
    next: (data: number): void => {console.log('[next] ', data);},
    error: null,
    complete: (): void => {console.log('[complete]');}
});