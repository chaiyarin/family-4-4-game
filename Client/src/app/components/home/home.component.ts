import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import * as question1 from './../../../assets/questions/question-1.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  question: any;
  questionHiddens: boolean[] = []
  title = 'angular-socketio-demo';
  socket;
  message: string = '';

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('receive-display', (result) => {
      this.questionHiddens = [];
      console.log(result);
      if (result.data === 1) {
        this.question = (question1 as any).default;
        console.log(this.question);
      }
      for (let i = 0; i < this.question.choices.lenght; i++) {
        this.questionHiddens.push(false);
      }
    });

    this.socket.on('receive-open-answer', (result) => {
      console.log('เปิดคำตอบ', result);
      this.questionHiddens[result.data] = true;
    });
  }

}
