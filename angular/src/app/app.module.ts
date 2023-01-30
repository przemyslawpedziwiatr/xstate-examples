import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateTransitionComponent } from './pages/state-transition/state-transition.component';
import { ContextCompoundComponent } from './pages/context-compound/context-compound.component';
import { GuardDelayComponent } from './pages/guard-delay/guard-delay.component';
import { EntryExitComponent } from './pages/entry-exit/entry-exit.component';
import { ServicesComponent } from './pages/services/services.component';
import { ParallelComponent } from './pages/parallel/parallel.component';
import { AlwaysComponent } from './pages/always/always.component';
import { ActorComponent } from './pages/actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    StateTransitionComponent,
    ContextCompoundComponent,
    GuardDelayComponent,
    EntryExitComponent,
    ServicesComponent,
    ParallelComponent,
    AlwaysComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
