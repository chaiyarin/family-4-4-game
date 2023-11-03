import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import * as question1 from './../../../assets/questions/question-1.json';
import * as question2 from './../../../assets/questions/question-2.json';
import * as question3 from './../../../assets/questions/question-3.json';
import * as question4 from './../../../assets/questions/question-4.json';
import * as question5 from './../../../assets/questions/question-5.json';
import * as question6 from './../../../assets/questions/question-6.json';
import * as question7 from './../../../assets/questions/question-7.json';

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
    this.socket = io(environment.apiUrl);
  }

  sendDisplay(questionNumber: number) {
    if (questionNumber === 0) {
      this.question = null;
    }
    if (questionNumber === 1) {
      this.question = (question1 as any).default;
      console.log(this.question);
    }
    if (questionNumber === 2) {
      this.question = (question2 as any).default;
      console.log(this.question);
    }
    if (questionNumber === 3) {
      this.question = (question3 as any).default;
      console.log(this.question);
    }
    if (questionNumber === 4) {
      this.question = (question4 as any).default;
      console.log(this.question);
    }
    if (questionNumber === 5) {
      this.question = (question5 as any).default;
      console.log(this.question);
    }
    if (questionNumber === 6) {
      this.question = (question6 as any).default;
      console.log(this.question);
    }
    if (questionNumber === 7) {
      this.question = (question7 as any).default;
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
    if (game === 'randomGame') {
      this.socket.emit('send-game', { data: { game: game, image: this.imageUrl } });
    }
  }

  openRandom(fixPerson : string) {
    this.socket.emit('send-random', { data: fixPerson });
  }
  
  random(fixPerson : string) {
    this.playSoundRandomGame();
    this.socket.emit('send-random', { data: fixPerson });
  }
 
  sendStartTimmer() {
    this.socket.emit('send-timer', {
      data: {
        isOn: true
      }
    });
  }

  openQRCode() {
    this.socket.emit('send-qrcode', {
      data: {
        isOn: true
      }
    });
  }

  closeQRCode() {
    this.socket.emit('send-qrcode', {
      data: {
        isOn: false
      }
    });
  }


  openQuiz(quizNo: number) {
    if(quizNo === 0) {
      this.socket.emit('send-timer', {
        data: {
          isOn: false
        }
      });
    }
    this.socket.emit('send-quiz', {
      data: {
        quizNo: quizNo,
        isOpen: true,
      }
    });
  }

  playSoundOpenPitigon() {
    const audio = new Audio();
    this.audio.src = 'assets/music/openPitigon.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundWinnerFarlab() {
    const audio = new Audio();
    this.audio.src = 'assets/music/winnerFarlab.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundAward() {
    const audio = new Audio();
    this.audio.src = 'assets/music/award.mp3';
    this.audio.load();
    this.audio.play();
  }
  playSoundOpenAward() {
    const audio = new Audio();
    this.audio.src = 'assets/music/openAward.mp3';
    this.audio.load();
    this.audio.play();
  }

  playSoundRandomGame() {
    this.audio.src = 'assets/music/randomgame.mp3';
    this.audio.load();
    this.audio.play();
  }
}
