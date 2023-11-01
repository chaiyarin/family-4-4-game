import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import * as question1 from './../../../assets/questions/question-1.json';
import * as question2 from './../../../assets/questions/question-2.json';
import * as question3 from './../../../assets/questions/question-3.json';
import * as question4 from './../../../assets/questions/question-4.json';
import * as question5 from './../../../assets/questions/question-5.json';
import * as question6 from './../../../assets/questions/question-6.json';
import * as question7 from './../../../assets/questions/question-7.json';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';

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
export class HomeComponent implements OnInit {

  isShowTimer: boolean = false;
  timeLeft: number = 30; // Initial countdown time in seconds
  interval: any;
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
  teamAWrongAnswers: boolean[] = [];
  teamBWrongAnswers: boolean[] = [];
  pressWinner = false;
  whatGame: any = { game: '4familygame', image: '' }

  constructor() {
    this.socket = io(environment.apiUrl);

    this.socket.on('receive-display', (result) => {
      this.flipStates = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
      console.log(result);
      if (result.data === 0) {
        this.pressWinner = false;
        this.question = null;
        this.teamAWrongAnswers = [];
        this.teamBWrongAnswers = [];
        for (let i = 0; i < 25; i++) {
          this.cards[i].revealed = false;
        }
        return;
      }
      if (result.data === 1) {
        this.question = (question1 as any).default;
        console.log(this.question);
      }
      if (result.data === 2) {
        this.question = (question2 as any).default;
        console.log(this.question);
      }
      if (result.data === 3) {
        this.question = (question3 as any).default;
        console.log(this.question);
      }
      if (result.data === 4) {
        this.question = (question4 as any).default;
        console.log(this.question);
      }
      if (result.data === 5) {
        this.question = (question5 as any).default;
        console.log(this.question);
      }
      if (result.data === 6) {
        this.question = (question6 as any).default;
        console.log(this.question);
      }
      if (result.data === 7) {
        this.question = (question7 as any).default;
        console.log(this.question);
      }
      for (let i = 0; i < this.question.choices.lenght; i++) {
        this.questionHiddens.push(false);
        this.flipStates.push('inactive');
      }
    });

    this.socket.on('receive-game', (result) => {
      console.log('เปิดคำตอบ', result);
      this.whatGame = result.data;
    });

    this.socket.on('receive-open-answer', (result) => {
      console.log('เปิดคำตอบ', result);
      this.toggleFlip(result.data);
    });

    this.socket.on('receive-incorrect-answer', (result) => {
      if (result.data === 'team-a') {
        this.teamAWrongAnswers.push(true);
      }
      if (result.data === 'team-b') {
        this.teamBWrongAnswers.push(true);
      }
      this.showOverlayWrongAnswer();
    });

    this.socket.on('receive-timer', (result) => {
      this.isShowTimer = result.data.isOn;
      if (this.isShowTimer) {
        this.startTimer()
      }
    });

    this.socket.on('receive-race-speed', (result) => {
      console.log(result.data);
      if (result.data === '000000000') {
        this.pressWinner = false;
        return;
      }
      if (!this.pressWinner) {
        this.pressWinner = true;
        this.teamWinner = result.data;
        this.showOverlayStartWinner();
      }
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
    }, 5000);
  }

  showOverlayStartWinner(): void {
    this.displayOverlayStartWinner = true;
    setTimeout(() => {
      this.displayOverlayStartWinner = false;
    }, 5000);
  }

  cards: any[] = [];


  ngOnInit(): void {
    const size = 100;
    let count = 1;
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        this.cards.push({
          revealed: false,
          number: count++,
          style: {
            left: `${x * size}px`,
            top: `${y * size}px`
          }
        });
      }
    }
  }

  revealCard(card: any): void {
    card.revealed = true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
      if (this.timeLeft === 0) {
        this.isShowTimer = false;
      }
    }, 1000);
  }

}
