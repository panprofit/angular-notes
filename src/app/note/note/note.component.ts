import {Component, OnDestroy, OnInit} from '@angular/core';
import {INote} from '../../shared/note.model';
import {DbService} from '../../shared/db.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {flatMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnDestroy {

  public note$: Observable<INote>;

  public id: number;
  private isDestroyed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DbService
  ) {
  }

  ngOnInit(): void {
    this.note$ = this.route.params.pipe(
      flatMap((params: Params) => +params.id ?
        this.dbService.getOne(this.id = +params.id) : this.dbService.create())
    );
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
  }

  saveText(text: string, note): void {
    note.text = text;
    this.getTags(note);
  }

  saveNote(note: INote): void {
    this.dbService.update(note)
      .pipe(
        takeWhile(() => !this.isDestroyed)
      )
      .subscribe(() => this.router.navigate(['/']));
  }

  deleteNote(note: INote): void {
    this.dbService.remove(note)
      .pipe(
        takeWhile(() => !this.isDestroyed)
      )
      .subscribe(() => this.router.navigate(['/']));
  }

  getTags(note: INote): void {
    const tags = note.getTags();
    tags.forEach((tag) => note.tags.add(tag));
  }

}
