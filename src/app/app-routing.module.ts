import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanDecisionComponent } from './loan-decision/loan-decision.component';

const routes: Routes = [
  {
    path: '',
    component: LoanDecisionComponent,
    data: {
      permissions: {
        only: [],
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
