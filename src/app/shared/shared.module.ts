import {NgModule} from '@angular/core';
import {TagPipe} from './tag.pipe';
import {HighlightPipe} from './highlight.pipe';
import {NoteTagPipe} from './note-tag.pipe';
import {GetTagsPipe} from './get-tags.pipe';

@NgModule({
  declarations: [
    TagPipe,
    HighlightPipe,
    NoteTagPipe,
    GetTagsPipe
  ],
  exports: [
    TagPipe,
    GetTagsPipe,
    HighlightPipe,
    NoteTagPipe
  ],
  imports: []
})
export class SharedModule {
}
