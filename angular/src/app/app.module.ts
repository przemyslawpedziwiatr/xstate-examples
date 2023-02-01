import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateTransitionComponent } from './pages/state-transition/state-transition.component';
import { ContextCompoundComponent } from './pages/context-compound/context-compound.component';
import { GuardDelayComponent } from './pages/guard-delay/guard-delay.component';
import { ServicesComponent } from './pages/services/services.component';
import { AlwaysComponent } from './pages/always/always.component';
import { ActorComponent } from './pages/actor/actor.component';
import { NgLetModule } from 'ng-let';

@NgModule({
  declarations: [
    AppComponent,
    StateTransitionComponent,
    ContextCompoundComponent,
    GuardDelayComponent,
    ServicesComponent,
    AlwaysComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
