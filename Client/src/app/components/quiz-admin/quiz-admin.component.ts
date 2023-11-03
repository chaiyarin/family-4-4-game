import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './quiz-admin.component.html',
  styleUrls: ['./quiz-admin.component.css']
})
export class QuizAdminComponent implements OnInit {

  socket;
  answers: any[] = [];
  winnerName: string = '';

  constructor() {
    this.socket = io(environment.apiUrl);
  }


  ngOnInit(): void {
    this.socket.on('receive-answer', (result) => {
      this.answers.push(result.data);
    });
  }

  sendWinnerName(): void {
    if (this.winnerName === '') {
      alert('กรอกชื่อผู้ชนะก่อน');
      return;
    }
    this.socket.emit('send-winner', {
      data: {
        name: this.winnerName,
        isOpenWinnerModal: true,
      }
    });
  }

}
