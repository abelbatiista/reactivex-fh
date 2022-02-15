// api
// https://reqres.in/

import { fromEvent, Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { tap, map, pluck, mergeMap, switchMap, exhaustMap } from 'rxjs/operators';

// helper

const httpLoginRequest: (user: {email: string, password: string}) => Observable<AjaxResponse<any> | string> = 
    (user: {email: string, password: string}): Observable<AjaxResponse<any> | string> => {
        return ajax.post('https://reqres.in/api/login?delay=1', user).pipe(
            pluck<any, any>('response'),
            map(({token}): string => {
                return token;
            })
        );
}

// body
const body = document.querySelector('body');

// form

const form: any = document.createElement('form');
const inputEmail: HTMLInputElement = document.createElement('input');
const inputPassword: HTMLInputElement = document.createElement('input');
const submitButton: HTMLButtonElement = document.createElement('button');

// configurations - email

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

// configurations - password

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

// configurations - button

submitButton.innerHTML = 'Sign in';

// append

form.append(inputEmail, inputPassword, submitButton);
body.append(form);

// streams

const submitForm$: Observable<SubmitEvent> = fromEvent<SubmitEvent>(form, 'submit');
submitForm$.pipe(
    tap((event: SubmitEvent): void => {
        event.preventDefault();
    }),
    pluck('target'),
    map((form: any): any => {
        return {
            email: form[0].value,
            password: form[1].value,
        }
    }),
    exhaustMap((user: {email: string, password: string}): Observable<AjaxResponse<any> | string> => {
        return httpLoginRequest(user);
    })
).subscribe((token: string | AjaxResponse<any>): void => {
    console.error(token);
}, (error: Error): void => {
    console.warn(error)
});