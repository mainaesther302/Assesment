import { Injectable } from '@angular/core';

interface Message {
  Id: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = []; // Array to store messages
  private predefinedMessages: string[] = [
    'Welcome to the app!',
    'You have new notifications.',
    'Your profile has been updated.',
    'A new message has been received.',
    'Server is down for maintenance.',
    'User settings saved successfully.',
    'Error: Unable to load data.',
    'You have been logged out.',
    'New friend request received.',
    'Data synced successfully.',
  ]; // Predefined list of messages

  constructor() {}

  // Method to add a message to the array
  addMessage(newMessage: Message): void {
    this.messages.push(newMessage);
  }

  // Method to retrieve all messages
  getMessages(): Message[] {
    return this.messages;
  }

  // Method to delete a message based on its Id
  deleteMessage(Id: number): void {
    const index = this.messages.findIndex((x) => x.Id === Id);
    if (index >= 0) {
      this.messages.splice(index, 1);
    }
  }

  // Method to clear all messages
  clearMessages(): void {
    this.messages = [];
  }

  // Method to simulate spinning the wheel and adding a random message
  spinTheWheel(): Message {
    const randomIndex = Math.floor(Math.random() * this.predefinedMessages.length); // Generate random index
    const randomText = this.predefinedMessages[randomIndex]; // Get random message text
    const newMessage: Message = { Id: this.messages.length + 1, text: randomText }; // Create new message object
    this.addMessage(newMessage); // Add new message to the array
    return newMessage; // Return the new message object
  }
}
