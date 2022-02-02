import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [next]: ', value),
    error: error => console.warn('error [observer]: ', error),
    complete: () => console.info('complete [observer]')
}

// const observable$ = Observable.create();

const observable$: Observable<string> = new Observable<string>((subscriber: any): any => {
    subscriber.next('ABel Batista RodrIguez');
    subscriber.next('RodrIguez');
    subscriber.next('Batista');
    subscriber.next('ABel');

    // Force Error
    const a = undefined;
    a.name = 'ajax';

    subscriber.complete();
});

observable$.subscribe(observer);

// observable$.subscribe((data: string): void => {
//     console.log('next: ', data);
//     // return data;
// }, (error: string): void => {
//     console.warn(error);
// }, (): void => {
//     console.info('Complete');
// });