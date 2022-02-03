import { from, Observable } from "rxjs";
import { scan, reduce, map } from 'rxjs/operators';

const numbers: number[] = [1, 2, 3, 4, 5];

const totalAccumulator: any = (acc, cur) => acc + cur;

// Reduce
from(numbers).pipe(
    reduce(totalAccumulator, 0)
).subscribe(console.log)

// Scan
from(numbers).pipe(
    scan(totalAccumulator, 0)
).subscribe(console.log)

// Redux
interface User {
    id?: string,
    authenticated?: boolean,
    token?: string,
    age?: number
}

const users: User[] = [
    {id: '1921002', authenticated: false, token: null},
    {id: '1932402', authenticated: true, token: 'ABC'},
    {id: '345454', authenticated: true, token: 'ABC123'}
]

const state$: Observable<User> = from<User[]>(users).pipe(
    scan((acc: any, cur: any) => {
        return {
            ...acc, ...cur
        }
    }, {age: 40})
)

const id$: any = state$.pipe(
    map((data: any): any => {
        return data
    })
);

id$.subscribe(console.log);