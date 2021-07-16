import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';

@NgModule({
  declarations: [NoteComponent],
  imports: [NoteRoutingModule],
})
export class NoteModule {}
