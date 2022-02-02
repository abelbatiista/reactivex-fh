import { of } from "rxjs";

// const observable$ = of<number[]>(1,2,3,4,5,6);
// const observable$ = of<number[]>(...[8, 9, 0], 1, 2, 3, 4, 5, 6);
const observable$ = of<any>([1, 2], {a: 1, b: 'string'}, function(){}, true, Promise.resolve(true));

console.log('begin.');
observable$.subscribe((data: any): void => {
    console.log(`next: ${data}`);
}, null, (): void => { 
    console.log('Completed!');
});
console.log('end.');