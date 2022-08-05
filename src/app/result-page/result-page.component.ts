import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
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
