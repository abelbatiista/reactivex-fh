import { Observable, of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numbers$: Observable<number | string> = of<any[]>(1, '1', 1, 3, 4, 2, 2, 4, 4, 5, 3, 1, '1');

numbers$.pipe(
    distinctUntilChanged()
).subscribe();

interface character {
    name: string
}

const characters: character[] = [
    {name: 'Megaman'},
    {name: 'Megaman'},
    {name: 'X'},
    {name: 'Zero'},
    {name: 'Dr. Willy'},
    {name: 'X'},
    {name: 'X'},
    {name: 'Megaman'},
    {name: 'Zero'}
];

from(characters).pipe(
    distinctUntilChanged((before: character, after: character): boolean => {
        return before.name === after.name
    })
).subscribe(console.log);