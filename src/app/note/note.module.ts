import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteTagsComponent} from './note-tags/note-tags.component';
import {NoteComponent} from './note/note.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteFormComponent } from './note-form/note-form.component';

const routes: Routes = [
  {
    path: '',
    component: NoteComponent
  }
];

@NgModule({
  declarations: [
    NoteComponent,
    NoteTagsComponent,
    NoteFormComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes),
    FlexModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class NoteModule {
}
