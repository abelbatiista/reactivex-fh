import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url: string = 'https://httpbin.org/delay/1XXX';

const ajaxErrorHandler: (error: AjaxError) => Observable<{ok: boolean, users: any[]}> = 
    (error: AjaxError): Observable<{ok: boolean, users: any[]}> => {
        console.warn('[error] ', error.message);
        return of({
            ok: false,
            users: []
        });
}

const observable1$: Observable<any> = ajax.getJSON(url);
const observable2$: Observable<any> = ajax(url);

// observable1$.pipe(
//     catchError(ajaxErrorHandler)
// ).subscribe((data: any): any => {
//     console.log('[getJSON] ', data);
// });

// observable2$.pipe(
//     catchError(ajaxErrorHandler)
// ).subscribe((data: any): any => {
//     console.log('[ajax] ', data);
// });

observable1$.pipe(
    // catchError(ajaxErrorHandler)
).subscribe({
    next: (data: any): void => {console.log('[next] ', data);},
    error: (error: any): any => {console.warn('[error]', error);},
    complete: (): void => {console.info('[compelte]');}
});