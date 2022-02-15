import { Observable, of, interval, fromEvent } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letters$: Observable<any> = of('a', 'b', 'c');

letters$.pipe(
    mergeMap((data: any): any => {
        return interval(1000).pipe(
            map((i: any): any => {return data + i;}),
            take(3)
        )
    })
).subscribe({
    // next: (data: any): void => {console.log('[next] ', data);},
    error: (error: any): void => {console.warn('[error] ', error);},
    // complete: (): void => {console.info('[complete]');}
});

const mousedown$: Observable<any> = fromEvent<any>(document, 'mousedown');
const mouseup$: Observable<any> = fromEvent<any>(document, 'mouseup');
const interval$: Observable<any> = interval();

mousedown$.pipe(
    mergeMap(() => {
        return interval$.pipe(
            takeUntil(mouseup$)
        )
    })
).subscribe(console.log);

mousedown$.pipe(
    mergeMap((): any => {
        return interval$.pipe(
            takeUntil(mouseup$)
        );
    })
).subscribe(console.log);