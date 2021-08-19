import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteComponent } from './note.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'add', component: NoteFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
