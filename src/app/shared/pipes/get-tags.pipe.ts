import {Pipe, PipeTransform} from '@angular/core';
import {INote} from '../note.model';

@Pipe({
  name: 'getTags'
})
export class GetTagsPipe implements PipeTransform {

  transform(notes: Array<INote>): Array<string> {
    if (!notes) {
      return null;
    }
    const setTags = new Set();
    notes.forEach((note: INote) =>
      note.tags.forEach((tag: string) =>
        setTags.add(tag)));
    const tags = Array.from(setTags);
    return tags.length ? tags : null;
  }

}
