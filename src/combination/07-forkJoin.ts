import { forkJoin, Observable, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GITHUB_API_URL: string = 'https://api.github.com/users';
const GITHUB_USER: string = 'abelbatiista';

forkJoin({
    user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists877`),
}).pipe(
    catchError((error: AjaxError): Observable<string> => {
        return of(error.message);
    })
).subscribe(console.log);