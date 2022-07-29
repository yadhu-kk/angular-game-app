import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
})
export class MessagePageComponent implements OnInit {
  //typedMessage: string = '';
  messages: any;
  //message:string='';
  // subscription: Subscription;

  constructor(private MessageServiceService: MessageServiceService) {}
  // postMessage() {
  //   if (this.typedMessage) {
  //     this.MessageServiceService.postMessage({
  //       msg: this.typedMessage,
  //       userName: 'nobody',
  //     });
  //     this.typedMessage = '';
  //   }
  // }

  //   this.subscription = this.MessageServiceService.receiveMessage().subscribe(
  //     (msg) => {
  //       if (msg) {
  //         this.MessageServiceService.receiveMessage ({msg:this.message});
  //         this.message='';
  //       } else {
  //         this.message = '';
  //       }
  //     }
  //   );

  ngOnInit(): void {
    // this.MessageServiceService.receiveMessage().subscribe((d) => {
    //   this.message = d;
    // });
    this.MessageServiceService.messages.subscribe({
      next: (value) => {
        this.messages = value;
      },
    });
  }
}
