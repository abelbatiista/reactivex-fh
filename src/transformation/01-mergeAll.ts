import { Observable, fromEvent, Subscription } from 'rxjs';
import { tap, debounceTime, pluck, map, mergeAll } from 'rxjs/operators';
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

// Input with NO mergeAll

// input$.pipe(
//     pluck<KeyboardEvent, any>('target'),
//     pluck<any, string>('value'),
//     debounceTime<string>(500),
//     map<string, any>((data: string): any => {
//         return ajax.getJSON(
//             `https://api.github.com/search/users?q=${data}`
//         );
//     }),
//     // map((data: Observable<any>): any => {
//     //     return data.subscribe((data: Subscription): any => {
//     //         return data;
//     //     })
//     // }),
//     // tap(data => console.log(data))
// ).subscribe((data: Observable<any>): any => {
//     data.pipe(
//         // pluck('url')
//     ).subscribe((data: any): any => {
//         console.log(data);
//     });
// });

input$.pipe(
    pluck<KeyboardEvent, any>('target'),
    pluck<any, string>('value'),
    debounceTime<string>(500),
    map<string, Observable<GithubUsers>>((data: string): Observable<any> => {
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${data}`
        );
    }),
    mergeAll(),
    pluck('items')
).subscribe((data: GithubUser[]): void => {
    showUsers(data);
});