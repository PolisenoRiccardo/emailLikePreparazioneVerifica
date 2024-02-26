export class Email {
    receiver: string;
    subject: string;
    text: string;
  
    constructor(receiver: string, subject: string, text: string) {
      this.receiver = receiver;
      this.subject = subject;
      this.text = text;
    }
  }