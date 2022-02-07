import { of } from "rxjs";
import { map, pluck, catchError } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

const url: string = 'https://api.github.com/users?per_page=5';

const errorHandler: (response: Response) => Response = (response: Response): Response => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }

    return response;
}

const ajaxErrorHandler: (error: AjaxError) => any = (error: AjaxError): any => {
    console.warn('[error] ', error.message);
    return of([]);
}

const fetchPromise: Promise<any> = fetch(url);

//#region 

//#endregion

// fetchPromise
//     .then((data: any): any => {
//         return data.json()
//     })
//     .then(console.log)
//     .catch((error: any): void => {
//         console.warn('[error] ', error);
//     });

// fetchPromise
//     .then(errorHandler)
//     .then((data: any): any => {
//         return data.json()
//     })
//     .then(console.log)
//     .catch((error: any): void => {
//         console.warn('[error] ', error);
//     });

ajax(url).pipe(
    pluck('response'),
    catchError(ajaxErrorHandler)
).subscribe((data: any): any => {
    console.log('[data] ', data);
});