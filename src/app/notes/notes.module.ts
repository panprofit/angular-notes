import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotesComponent} from './notes/notes.component';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatChipsModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {NotesTagsComponent} from './notes-tags/notes-tags.component';
import {NotePreviewComponent} from './note-preview/note-preview.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  {
    path: ':id',
    loadChildren: '../note/note.module#NoteModule'
  }
];

@NgModule({
  declarations: [
    NotesComponent,
    NotesTagsComponent,
    NotePreviewComponent,
  ],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes),
    FlexModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    SharedModule
  ]
})
export class NotesModule {
}
