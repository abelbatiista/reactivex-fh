import { Observable, fromEvent, Subscription } from 'rxjs';
import { debounceTime, pluck, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsers, GithubUser } from '../interfaces/github-users';


// References
const body: HTMLBodyElement = document.querySelector('body');
const textInput: HTMLInputElement = document.createElement('input');
const orderList: HTMLOListElement = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers: (users: GithubUser[]) => void = (users: GithubUser[]) => {
    orderList.innerHTML = '';
    for(const user of users) {
        const listItem: HTMLLIElement = document.createElement('li');
        const image: HTMLImageElement = document.createElement('img');
        image.src = user.avatar_url;
        const anchor: HTMLAnchorElement = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Watch page...';
        anchor.target = '_blank';
        listItem.append(user.login + ' ');
        listItem.append(image);
        listItem.append(anchor);
        orderList.append(listItem);
    }
}

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    pluck<KeyboardEvent, any>('target'),
    pluck<any, string>('value'),
    debounceTime<string>(500),
    mergeMap<string, Observable<GithubUsers>>((data: string): Observable<any> => {
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${data}`
        );
    }),
    pluck('items')
)/*.subscribe((data: GithubUser[]): void => {
    showUsers(data);
})*/;

const url: string = 'https://httpbin.org/delay/1?arg=';
input$.pipe(
    pluck<any, any>('target'),
    pluck<any, any>('value'),
    switchMap((text: string): any => {
        return ajax.getJSON(url + text)
    })
).subscribe(console.log);