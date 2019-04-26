import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {INote, Note} from './note.model';
import {from, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {

  public notes: Dexie.Table<INote, number>;

  constructor() {
    super('DbService');
    this.version(1).stores({
      notes: '++created,text,tags'
    });
    this.notes = this.table('notes');
  }

  getAll(tag: string): Observable<Array<INote>> {
    const filter = tag ? this.notes.filter((note: INote) => note.tags.has(tag)) : this.notes;
    return from(filter.toArray()).pipe(
      map((notes) => notes.map((note: INote) => new Note(note)))
    );
  }

  getOne(created: number): Observable<INote> {
    return from(this.notes.get(created)).pipe(
      map((note: INote) => new Note(note))
    );
  }

  create(): Observable<INote> {
    return of(new Note());
  }

  update(note: INote): Observable<number> {
    return from(this.notes.put(note));
  }

  remove(note: INote): Observable<void> {
    return from(this.notes.delete(note.created));
  }

}
