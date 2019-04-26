import {Pipe, PipeTransform} from '@angular/core';
import {INote} from './note.model';

@Pipe({
  name: 'noteTag'
})
export class NoteTagPipe implements PipeTransform {

  transform(items: Array<INote>, tag: string): Array<INote> {
    if (!items || !tag) {
      return items;
    }
    return items.filter((item) => item.tags.has(tag));
  }

}
