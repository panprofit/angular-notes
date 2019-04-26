import {Component, Input} from '@angular/core';
import {INote} from '../../shared/note.model';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent {
  @Input() note: INote;
  @Input() tag: string;

  constructor() {
  }

}
