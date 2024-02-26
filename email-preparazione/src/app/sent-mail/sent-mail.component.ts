import { Component, Input, HostBinding } from '@angular/core';
import { Email } from '../app.email';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail: Email;
  @HostBinding('attr.class') cssClass = 'card mt-3';
  nascondi = false
  espandi(): boolean {
    this.nascondi = !this.nascondi
    return false
  }
}
