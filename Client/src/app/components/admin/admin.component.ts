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
    this.socket = io('http://localhost:3000');
  }

  sendDisplay(questionNumber: number) {
    if (questionNumber === 0) {
      this.question = null;
    }
    if (questionNumber === 1) {
      this.question = (question1 as any).default;
      console.log(this.question);
    }
    console.log('แสดงคำถาม', questionNumber)
    this.socket.emit('send-display', { data: questionNumber });
  }

  sendOpenAnswer(answerNumber: number) {
    this.socket.emit('send-open-answer', { data: answerNumber });
  }

  resetPlayer() {
    this.socket.emit('send-race-speed', { data: '000000000' });
  }

  incorrectData() {
    this.socket.emit('send-incorrect-answer', { data: true });
  }
}
