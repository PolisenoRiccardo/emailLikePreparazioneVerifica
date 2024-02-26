import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Email {
  receiver: string;
  object: string;
  text: string;

  constructor(receiver: string, object: string, text: string) {
    this.receiver = receiver;
    this.object = object;
    this.text = text;
  }
}