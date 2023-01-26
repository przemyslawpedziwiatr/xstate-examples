import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateTransitionComponent } from './pages/state-transition/state-transition.component';

const routes: Routes = [{
    path: 'state-transition',
    component: StateTransitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
