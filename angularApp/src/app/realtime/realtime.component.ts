// realtime.component.ts
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-realtime',
  imports: [FormsModule, CommonModule],
  template: `
    <h2>WebSocket Demo</h2>
    <input [(ngModel)]="message" placeholder="Type a message" />
    <button (click)="send()">Send</button>
    <ul>
      <li *ngFor="let msg of messages">{{ msg }}</li>
    </ul>
  `
})
export class RealtimeComponent implements OnInit {
  message = '';
  messages: string[] = [];

  constructor(private wsService: WebsocketService) {}

  ngOnInit() {
    this.wsService.connect().subscribe({
      next: (msg: any) => {
          if (msg) {
            const clean = msg.replace(/^"|"$/g, '');
            this.messages.push(clean);
          } else {
            this.messages.push(msg);
          }
      },
      error: (err) => console.error(err),
      complete: () => console.log('Connection closed'),
    });
  }

  send() {
    this.wsService.sendMessage(this.message);
    this.message = '';
  }
}
