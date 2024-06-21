import { Component, OnInit } from '@angular/core';
import { MessageService } from './Service/message.service';
import { trigger, transition, style, animate } from '@angular/animations'; 
import { Message } from './Models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // Define animations
    trigger('spin', [
      transition(':enter', [
        style({ transform: 'rotate(0deg)' }), 
        //// ********************************888Animation: rotate 360 degrees over 1 second*****************************//
        animate('1s', style({ transform: 'rotate(360deg)' })) 
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Assesment';
  newMessageId = 0; 
  spinning = false; // Flag to control spinning animation
  currentMessage: string = ''; 

  constructor(public messageService: MessageService) {}

  //*******************************initialize the initial message*****************************888 */
  ngOnInit(): void {
    this.addMessage('AppComponent initialized.'); 
  }

  //******************************************** */ Method to add a custom message**************************
  addMessage(text: string = 'New custom message added.'): void {
    this.newMessageId++; // Increment message Id
    const message = { Id: this.newMessageId, text: text }; 
    this.messageService.addMessage(message); 
  }

  // Method to handle spinning the wheel
  spinTheWheel(): void {
    this.spinning = true; 
    setTimeout(() => { 
      const newMessage = this.messageService.spinTheWheel(); 
      this.currentMessage = newMessage.text; 
      this.spinning = false; 
    }, 1000);
  }

  // Method to clear all messages
  clearMessages(): void {
    this.messageService.clearMessages(); 
    this.currentMessage = ''; 
  }

  // Getter to retrieve all messages from MessageService
  get messages(): Message[] {
    return this.messageService.getMessages();
  }
}
