import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpandableAreaModule } from '../lib/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpandableAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
