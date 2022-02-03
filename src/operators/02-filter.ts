import { Observable, range, of, from, fromEvent } from 'rxjs';
import { filter, pluck, map } from "rxjs/operators";

// range(1, 10).pipe(
//     filter((data: any): any => {
//         return data % 2 === 1;
//     })
// ).subscribe(console.log);

range(1, 10).pipe(
    filter((data: any, i: any): any => {
        // console.log('index: ', i);
        return data % 2 === 1;
    })
).subscribe(/*console.log*/);

const characters: character[] = [
    {
        type: 'hero',
        name: 'batman'
    },
    {
        type: 'hero',
        name: 'nightwing'
    },
    {
        type: 'villian',
        name: 'joker'
    }
];

const characters$: Observable<character> = from(characters);
characters$.pipe(
    filter((data: character): boolean => {
        return data.type  !== 'villian';
    })
).subscribe(/*console.log*/);

interface character {
    type: string, 
    name: string
}

const keyup$: Observable<string> = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map<KeyboardEvent, string>((data: KeyboardEvent): string => {
        return data.code;
    }),
    filter<string, string>((data: string): data is string => {
        return data === 'Enter';
    })
);
keyup$.subscribe(console.log);