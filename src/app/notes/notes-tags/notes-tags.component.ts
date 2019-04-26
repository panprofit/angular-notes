import {Component, Input, OnInit} from '@angular/core';
import {INote} from '../../shared/note.model';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-notes-tags',
  templateUrl: './notes-tags.component.html',
  styleUrls: ['./notes-tags.component.css']
})
export class NotesTagsComponent implements OnInit {
  @Input() notes: Array<INote>;

  public queryParams$: Observable<object>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.queryParams$ = this.route.queryParams;
  }

}
