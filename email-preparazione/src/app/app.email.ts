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