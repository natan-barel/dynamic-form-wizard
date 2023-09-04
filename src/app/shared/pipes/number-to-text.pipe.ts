import { Pipe, PipeTransform } from '@angular/core';
import { ToWords } from 'to-words';

@Pipe({
    name: 'numberToText'
})
export class NumberToTextPipe implements PipeTransform {
    toWords = new ToWords();
    transform(value: number): string {
        console.log(value);
        // Check if the value is a valid number
        if (isNaN(value)) {
            return 'Not a number';
        }

        // Convert the number to its textual representation
        return this.toWords.convert(value);
    }
}
