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
  private subject = new Subject<string>();
  //private subject = new Subject<any>();

  constructor() {}
  // sendMessage(message: string) {
  //   this.subject.next({ text: message });
  //   console.log(message);
  // }
  // clearMessages() {
  //   this.subject.next({});
  // }

  // sendMessage(message: string) {
  //   this.subject.next(message);
  // }
  // receiveMessage(): Observable<any> {
  //   return this.subject.asObservable();
  // }
  postMessage(message: chatMessage) {
    const pastMessages = this.messages.getValue();
    this.messages.next([...pastMessages, message]);
  }
}
