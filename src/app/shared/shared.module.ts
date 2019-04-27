import {NgModule} from '@angular/core';
import {TagPipe} from './pipes/tag.pipe';
import {HighlightPipe} from './pipes/highlight.pipe';
import {NoteTagPipe} from './pipes/note-tag.pipe';
import {GetTagsPipe} from './pipes/get-tags.pipe';

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
