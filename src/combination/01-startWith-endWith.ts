import { Observable, of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const numbers$: Observable<any> = of<any[]>(1, 2, 3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numbers$.subscribe(console.log);