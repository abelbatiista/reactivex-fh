import { ajax } from "rxjs/ajax";
import { Observable } from 'rxjs';

const url: string = 'https://httpbin.org/delay/1';

const observable$: Observable<any> = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'x-token': '77y7Hhga239JAJsnslsdc'
});

observable$.subscribe((data: any): any => {
    console.log('[data] ', data);
});