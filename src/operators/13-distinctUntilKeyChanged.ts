import { Observable, of, from } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

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
    distinctUntilKeyChanged('name')
).subscribe(console.log);