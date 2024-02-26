import { Component, Input, HostBinding } from '@angular/core';
import { Email } from '../app.email';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail: Email;
  @HostBinding('class') cssColor = 'card bg-light mt-3';
  nascondi = false
  espandi(): boolean {
    this.nascondi = !this.nascondi
    return false
  }
  speciale(): boolean {
    if (this.cssColor == 'card bg-warning mt-3') {
      this.cssColor = 'card bg-light mt-3';
    } else this.cssColor = 'card bg-warning mt-3';
    return false
  }
}
