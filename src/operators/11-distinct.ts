import { Observable, of, from } from 'rxjs';
import { distinct } from "rxjs/operators";

const numbers$: Observable<number> = of<number[]>(1, 1, 1, 3, 4, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(
    distinct()
).subscribe();

interface character {
    name: string
}

const characters: character[] = [
    {name: 'Megaman'},
    {name: 'X'},
    {name: 'Zero'},
    {name: 'Dr. Willy'},
    {name: 'X'},
    {name: 'Megaman'},
    {name: 'Zero'}
];

from(characters).pipe(
    distinct((data: character): any => {
        return data.name
    })
).subscribe(console.log);