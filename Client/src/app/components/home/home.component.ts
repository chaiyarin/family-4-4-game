import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import * as question1 from './../../../assets/questions/question-1.json';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateX(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateX(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent {

  displayOverlayWrongAnswer: boolean = false;
  displayOverlayStartWinner: boolean = false;
  flipStates: string[] = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
  question: any;
  questionHiddens: boolean[] = []
  teamWinner: string = '';
  socket;
  message: string = '';
  scoreTeamA: number = 0;
  scoreTeamB: number = 0;
  teamAWrongAnswers: [] = [];
  teamBWrongAnswers: [] = [];

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('receive-display', (result) => {
      this.flipStates = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
      console.log(result);
      if (result.data === 0) {
        this.question = null;
        return;
      }
      if (result.data === 1) {
        this.question = (question1 as any).default;
        console.log(this.question);
      }
      for (let i = 0; i < this.question.choices.lenght; i++) {
        this.questionHiddens.push(false);
        this.flipStates.push('inactive');
      }
    });

    this.socket.on('receive-open-answer', (result) => {
      console.log('เปิดคำตอบ', result);
      this.toggleFlip(result.data);
    });

    this.socket.on('receive-incorrect-answer', (result) => {
      this.showOverlayWrongAnswer();
    });

    this.socket.on('receive-race-speed', (result) => {
      console.log(result.data);
      this.teamWinner = result.data;
    });

    this.socket.on('receive-send-point-team', (result) => {
      this.scoreTeamA = result.data.scoreTeamA;
      this.scoreTeamB = result.data.scoreTeamB;
    });
  }

  toggleFlip(index: number): void {
    this.flipStates[index] = this.flipStates[index] === 'inactive' ? 'active' : 'inactive';
  }

  showOverlayWrongAnswer(): void {
    this.displayOverlayWrongAnswer = true;
    setTimeout(() => {
      this.displayOverlayWrongAnswer = false;
    }, 10000);
  }

  showOverlayStartWinner(): void {
    this.displayOverlayStartWinner = true;
    setTimeout(() => {
      this.displayOverlayStartWinner = false;
    }, 10000);
  }
}
