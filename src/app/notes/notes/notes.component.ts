import {Component, OnInit} from '@angular/core';
import {INote} from '../../shared/note.model';
import {DbService} from '../../shared/db.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes$: Observable<Array<INote>>;
  public tag: string;

  constructor(
    private route: ActivatedRoute,
    private dbService: DbService
  ) {
  }

  ngOnInit(): void {
    this.notes$ = this.route.queryParams.pipe(
      flatMap((params: Params) => this.dbService.getAll(this.tag = params.tag))
    );
  }

}
