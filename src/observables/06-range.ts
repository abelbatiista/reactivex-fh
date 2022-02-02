import { Observable, range, of, asyncScheduler } from 'rxjs';

// const source$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const source$: Observable<number> = range(1, 10, asyncScheduler);

console.log('begin.');
source$.subscribe(console.log);
console.log('end.');