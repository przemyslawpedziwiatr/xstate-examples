import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextCompoundComponent } from './pages/context-compound/context-compound.component';
import { StateTransitionComponent } from './pages/state-transition/state-transition.component';

const routes: Routes = [{
    path: 'state-transition',
    component: StateTransitionComponent
  },
  {
    path: 'context',
    component: ContextCompoundComponent
  },
  {
    path: 'guard-delay',
    component: ContextCompoundComponent
  },
  {
    path: 'entry-exit',
    component: ContextCompoundComponent
  },
  {
    path: 'services',
    component: ContextCompoundComponent
  },
  {
    path: 'parallel',
    component: ContextCompoundComponent
  },
  {
    path: 'always',
    component: ContextCompoundComponent
  },
  {
    path: 'actor',
    component: ContextCompoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
