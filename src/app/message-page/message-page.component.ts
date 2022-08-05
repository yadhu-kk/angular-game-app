import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
})
export class MessagePageComponent implements OnInit {
  typedMessage: string = '';

  messages: any;

  constructor(private MessageServiceService: MessageServiceService) {}
  postMessage() {
    if (this.typedMessage) {
      this.MessageServiceService.postMessage({
        msg: this.typedMessage,
        userName: 'nobody',
      });
      this.typedMessage = '';
    }
  }
  clearMessage(): void {
    this.MessageServiceService.clearMessage(this.messages);
  }

  ngOnInit(): void {}
}
