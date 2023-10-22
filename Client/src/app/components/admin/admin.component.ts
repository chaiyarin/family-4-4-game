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
  socket;
  message: string = '';
  scoreTeamA: number = 0;
  scoreTeamB: number = 0;
  private audio = new Audio();

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
    this.audio.src = 'assets/music/openanswer.mp3';
    this.audio.load();
    this.audio.play();
    this.socket.emit('send-open-answer', { data: answerNumber });
  }

  resetPlayer() {
    this.socket.emit('send-race-speed', { data: '000000000' });
  }

  incorrectData(teamName: string) {
    this.audio.src = 'assets/music/wronganswer.mp3';
    this.audio.load();
    this.audio.play();
    this.socket.emit('send-incorrect-answer', { data: teamName });
  }

  sendPoint() {
    this.socket.emit('send-send-point-team', {
      data: {
        scoreTeamA: this.scoreTeamA,
        scoreTeamB: this.scoreTeamB
      }
    });
  }

  playSoundWinnerPress() {
    const audio = new Audio();
    this.audio.src = 'assets/music/presswinnner.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundOpenTeam() {
    const audio = new Audio();
    this.audio.src = 'assets/music/openTeam.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundWinner() {
    const audio = new Audio();
    this.audio.src = 'assets/music/winnerTeam.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundRobberPoint() {
    const audio = new Audio();
    this.audio.src = 'assets/music/robberPointAndWinner.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundWithMe() {
    const audio = new Audio();
    this.audio.src = 'assets/music/playSoundWithMe.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundMeMeMe() {
    const audio = new Audio();
    this.audio.src = 'assets/music/mememe.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundAnswerSlow() {
    const audio = new Audio();
    this.audio.src = 'assets/music/slowAnswer.mp3';
    this.audio.load();
    this.audio.play();
  }

  imageUrl: string = 'https://img.freepik.com/free-photo/front-view-sad-girl-being-bullied_23-2149748403.jpg?w=1800&t=st=1698002467~exp=1698003067~hmac=7819ff580a180ede83c1b1cc03f0c62ab8ae9b8b909f15bf4695c60d692dc352';
  openGame(game: string) {
    if (game === '4familygame') {
      this.socket.emit('send-game', { data: { game: game, image: this.imageUrl } });
    }
    if (game === 'jigsaw') {
      this.socket.emit('send-game', { data: { game: game, image: this.imageUrl } });
    }
    if (game === 'ramdonNumber') {
      this.socket.emit('send-game', { data: { game: game, image: this.imageUrl } });
    }
  }
}
