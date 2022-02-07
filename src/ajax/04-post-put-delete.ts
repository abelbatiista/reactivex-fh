import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url: string = 'https://httpbin.org/delay/1';

const observableGet$: Observable<any> = ajax.get(url, {
    'x-token': 'akdkHHg179392jUUACZtGgzzcafF2121'
});

const observablePost$: Observable<any> = ajax.post(url, {
    id: 1,
    name: 'ABel'
}, {
    'x-token': 'akdkHHg179392jUUACZtGgzzcafF2121'
});

const observablePut$: Observable<any> = ajax.put(url, {
    id: 1,
    name: 'ABel'
}, {
    'x-token': 'akdkHHg179392jUUACZtGgzzcafF2121'
});

const observableDelete$: Observable<any> = ajax.delete(url, {
    'x-token': 'akdkHHg179392jUUACZtGgzzcafF2121'
});

ajax({
    url,
    method: 'POST',
    headers: {
        'x-token': 'akdkHHg179392jUUACZtGgzzcafF2121'
    },
    body: {
        id: 1,
        name: 'ABel'
    }
}).subscribe(console.log);