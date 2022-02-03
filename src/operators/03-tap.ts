import { Observable, range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$: Observable<number> = range(1, 10);

numbers$.pipe(
    tap((data: number): void => {
        console.log('tap 1st: ', data);
    }),
    map((data: number): number => {
        return data * 10
    }),
    tap(
        {
            next: (data: number): void => { console.log('tap 2nd: ', data); },
            error: null,
            complete: (): void => { console.log('Finished.'); }
        }
    )
).subscribe((data: number): void => {
    console.log('subscribe: ', data);
});