import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {
  }

  transform(text: string, tag: string): SafeHtml {
    const value = (!text || !tag) ?
      text.replace(/\n/g, '<br>') :
      text.split(`#${tag}`)
        .join(`#<span style="background-color: lightgreen">${tag}</span>`)
        .replace(/\n/g, '<br>');

    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
