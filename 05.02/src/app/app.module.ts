import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
