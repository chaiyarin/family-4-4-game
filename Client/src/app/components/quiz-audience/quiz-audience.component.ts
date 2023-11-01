import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz-audience',
  templateUrl: './quiz-audience.component.html',
  styleUrls: ['./quiz-audience.component.css']
})
export class QuizAudienceComponent implements OnInit {

  socket;
  quiz: any;

  constructor() {
    this.socket = io(environment.apiUrl);
  }

  ngOnInit(): void {

    this.socket.on('receive-quiz', (result) => {
      if (result.data.quizNo === 0) {
        this.quiz = null;
        return;
      }
      this.quiz = result.data;
    });

  }

}
