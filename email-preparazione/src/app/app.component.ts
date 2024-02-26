import { Component } from '@angular/core';
import { Email } from './app.email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  casella: Email[];
  receiver : string;
  object : string;
  text : string;
  constructor() {
    this.casella = [
      new Email('Sandro', 'Te lo dovevo dire', 'Ho detto Sandro...')
    ]
  }
  nuovaMail(receiver: HTMLInputElement, subject:HTMLInputElement, text:HTMLInputElement): boolean {
    this.casella.push(new Email(receiver.value, subject.value, text.value));
    return false
  }

}
