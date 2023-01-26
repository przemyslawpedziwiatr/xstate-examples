import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateTransitionComponent } from './pages/state-transition/state-transition.component';
import { ContextCompoundComponent } from './pages/context-compound/context-compound.component';

@NgModule({
  declarations: [
    AppComponent,
    StateTransitionComponent,
    ContextCompoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
