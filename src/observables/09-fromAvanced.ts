import { of, from, Observer, Observable } from "rxjs";

const observer: Observer<any> = {
    next: (value: any): void => { console.log('next: ', value); },
    error: null,
    complete: (): void => { console.log('completed.'); }
}

// ******* First Part

// const source$: Observable<any> = from<any>([1, 2, 3, 4, 5]);
// const source$: Observable<any> = of<any>(...[1, 2, 3, 4, 5]);

// const source$: Observable<any> = from<any>('Abel');
// const source$: Observable<any> = of<any>('Abel');

// const source$: Observable<Promise<Response>> = from<Promise<any>>(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);

// source$.subscribe(async(data: any): Promise<void> => {
//     console.log(data.ok);
//     const response = await data.json();
//     console.log(response);
// });

// ******* Second part

const generator: any = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable: any = generator();

// for(let k of iterable) {
//     console.log(k);
// }

from(iterable).subscribe(observer);