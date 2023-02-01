import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './pages/actor/actor.component';
import { AlwaysComponent } from './pages/always/always.component';
import { ContextCompoundComponent } from './pages/context-compound/context-compound.component';
import { GuardDelayComponent } from './pages/guard-delay/guard-delay.component';
import { ServicesComponent } from './pages/services/services.component';
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
    component: GuardDelayComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'always',
    component: AlwaysComponent
  },
  {
    path: 'actor',
    component: ActorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
