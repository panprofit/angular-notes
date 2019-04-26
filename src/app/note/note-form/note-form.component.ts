import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Input() text: string;
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  public textarea = new FormControl('', [Validators.required]);

  constructor() {
  }

  ngOnInit(): void {
    this.textarea.setValue(this.text);
  }

}
