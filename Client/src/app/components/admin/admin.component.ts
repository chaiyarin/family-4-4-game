import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import * as question1 from './../../../assets/questions/question-1.json';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  question: any = null;
  title = 'angular-socketio-demo';
  socket;
  message: string = '';

  constructor() {
    console.log(this.question);
    this.socket = io('https://e02a-183-88-226-220.ngrok-free.app');
  }

  sendDisplay(questionNumber: number) {
    console.log('แสดงคำถาม', questionNumber)
    this.socket.emit('send-display', { data: questionNumber });
  }

  sendOpenAnswer(answerNumber: number) {
    this.socket.emit('send-open-answer', { data: answerNumber });
  }
}
