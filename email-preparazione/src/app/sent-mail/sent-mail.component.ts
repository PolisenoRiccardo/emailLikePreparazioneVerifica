import { Component, Input, HostBinding } from '@angular/core';
import { Email } from '../app.email';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail: Email;
  @HostBinding('attr.class') cssClass = 'chiuso';  
  espandi(): boolean {
    if (this.cssClass == 'chiuso') {
      this.cssClass = 'espanso';
    } 
      else if (this.cssClass == 'espanso')      
    { 
      this.cssClass = 'chiuso';
    }
    return false
  }
}
