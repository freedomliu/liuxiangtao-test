import { Component, OnInit } from '@angular/core';
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-connect2',
  templateUrl: './connect2.component.html',
  styleUrls: ['./connect2.component.css']
})
export class Connect2Component implements OnInit {

  constructor(private messageService: MessageService) {}

  sendMessage(value: string): void {
    debugger
    this.messageService.sendMessage(value);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

  ngOnInit() {
  }

}
