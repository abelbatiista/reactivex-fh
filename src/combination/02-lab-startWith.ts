import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { startWith, endWith } from "rxjs/operators";

// references

const loadingDiv: HTMLDivElement = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'loading...';

const body: HTMLBodyElement = document.querySelector('body');

// stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe((data: any): void => {
    if(data === true) {
        body.append(loadingDiv);
    } else {
        document.querySelector('.loading').remove();
    }
    console.log(data);
});