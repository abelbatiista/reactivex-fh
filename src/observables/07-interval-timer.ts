import { interval, Observable, Observer, timer } from 'rxjs';

const observer: Observer<any> = {
    next: (data: string): void => { console.log('next: ', data); },
    error: null,
    complete: (): void => { console.log('completed.'); }
}

const interval$: Observable<any> = interval(1000);

const todayIn5: Date = new Date(); // now
todayIn5.setSeconds(todayIn5.getSeconds() + 5);

// const timer$: Observable<any> = timer(2000);
// const timer$: Observable<any> = timer(0);
// const timer$: Observable<any> = timer(2000, 1000); // an interval that begins after 2 seconds.
const timer$: Observable<any> = timer(todayIn5);

console.log('begin.');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('end.');