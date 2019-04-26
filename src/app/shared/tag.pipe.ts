import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(items: Array<string>, tag: string): Array<string> {
    if (!items || !tag) {
      return items;
    }
    return items.filter((item) => item === tag);
  }

}
