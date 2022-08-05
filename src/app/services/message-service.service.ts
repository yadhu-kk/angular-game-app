import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface chatMessage {
  userName: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  messages: BehaviorSubject<chatMessage[]> = new BehaviorSubject<chatMessage[]>(
    []
  );

  constructor() {}

  postMessage(message: chatMessage) {
    const pastMessages = this.messages.getValue();
    this.messages.next([...pastMessages, message]);
  }
  clearMessage(message: any): void {
    this.messages.next([]);
  }
}
