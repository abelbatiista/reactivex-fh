import { Observable, range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from "rxjs/operators";

// range(1, 10)
//     .pipe(
//         map<number, string>((data: number): string => {
//             return (data * 10).toString();
//         })
//     )
//     .subscribe(data => console.log(data));

const keyup$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

// keyup$.pipe(
//     map<KeyboardEvent, {key: any}>((data: KeyboardEvent): {key: any} => {
//         return {key: data.key};
//     }),
//     pluck('key') // pluck operator extratcs json value.
// ).subscribe((data: any): void => {
//     console.log(data);
// });



// keyup$.subscribe((data: any): void => {
//     console.log(data);
// });

//********************* */

// operators

// map
const keyupMap$: Observable<string> = keyup$.pipe(
    map<KeyboardEvent, string>((data: KeyboardEvent): string => {
        return data.code;
    })
);
keyupMap$.subscribe((data: string): void => {
    console.log('map: ', data);
});

// pluck
const keyupPluck$: Observable<unknown> = keyup$.pipe(
    pluck<KeyboardEvent>('target', 'baseURI')
);
keyupPluck$.subscribe((data: unknown): void => {
    console.log('pluck', data);
});

// mapTo
const keyupMapTo$: Observable<any> = keyup$.pipe(
    mapTo<string>('touched!!!')
);
keyupMapTo$.subscribe((data: any): void => {
    console.log('mapTo', data);
});