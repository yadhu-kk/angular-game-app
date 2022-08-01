import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
})
export class MessagePageComponent implements OnInit {
  messages: any;

  constructor(private MessageServiceService: MessageServiceService) {}

  ngOnInit(): void {
    this.MessageServiceService.messages.subscribe({
      next: (value) => {
        this.messages = value;
      },
    });
  }
}
