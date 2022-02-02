import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete!')
};

const interval$: Observable<any> = new Observable<any>((subscriber: any): () => void => {
    const interval: NodeJS.Timer = setInterval((): void => {
        subscriber.next(Math.random());
    }, 3000);

    return (): void => {
        clearInterval(interval);
        console.log('destroyed interval.');
    };
});

const subject$: Subject<any> = new Subject<any>();
const subscription: Subscription = interval$.subscribe(subject$);

// const subscription1: Subscription = interval$.subscribe((data: number): void => {
//     console.log(`ONE: ${data}.`);
// });

// const subscription2: Subscription = interval$.subscribe((data: number): void => {
//     console.log(`TWO: ${data}.`);
// });

const subscription1: Subscription = subject$.subscribe(observer);

const subscription2: Subscription = subject$.subscribe(observer);

setTimeout((): void => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
    // subscription1.unsubscribe();
    // subscription2.unsubscribe();
}, 15000);