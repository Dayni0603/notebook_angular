import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteRoutingModule } from './note-routing.module';
import { NoteListComponent } from './pages/note-list/note-list.component';

@NgModule({
  declarations: [NoteListComponent, NoteFormComponent],
  imports: [NoteRoutingModule],
})
export class NoteModule {}
