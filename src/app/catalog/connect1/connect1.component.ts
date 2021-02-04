import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "../service/message.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-connect1',
  templateUrl: './connect1.component.html',
  styleUrls: ['./connect1.component.css']
})
export class Connect1Component implements OnDestroy {

  messages = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService
      .getMessage().subscribe( message => {
        debugger;
        this.messages.push(message.text);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
