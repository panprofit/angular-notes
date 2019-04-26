import {Component, Input} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-note-tags',
  templateUrl: './note-tags.component.html',
  styleUrls: ['./note-tags.component.css']
})
export class NoteTagsComponent {
  @Input() tags: Set<string>;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  constructor() {
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const tag = event.value.trim();

    if (tag) {
      this.tags.add(tag);
    }

    if (input) {
      input.value = '';
    }
  }

}
