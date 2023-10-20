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
    this.socket = io('https://e02a-183-88-226-220.ngrok-free.app');

    this.socket.on('receive-display', (result) => {
      this.questionHiddens = [];
      for (let i = 0; i < this.question.choices.lenght; i++) {
        this.questionHiddens.push(false);
      }
      console.log(result);
      if (result.data === 1) {
        this.question = (question1 as any).default;
        console.log(this.question);
      }
    });

    this.socket.on('receive-open-answer', (result) => {
      console.log(result);
      this.message = result.data.data;
    });
  }

}
