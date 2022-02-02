import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete!')
};

const interval$: Observable<any> = new Observable<any>((subscriber: any): any => {
    var counter = 0;

    const interval = setInterval((): any => {
        subscriber.next(counter);
        counter++;
    }, 1000);

    setTimeout((): void => {
        subscriber.complete();
    }, 2500);

    return (): any => {
        clearInterval(interval);
        console.log('interval destroyed.');
    };
});

// const subscription: Subscription = interval$.subscribe((data: number): void => {
//     console.log(`${data} second(s).`);
// });

const subscription1: Subscription = interval$.subscribe(observer);
const subscription2: Subscription = interval$.subscribe(observer);
const subscription3: Subscription = interval$.subscribe(observer);

subscription1.add(subscription2);
subscription2.add(subscription3);

setTimeout((): any => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('timeout completed.');
}, 5000);