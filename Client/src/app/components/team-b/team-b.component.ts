import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-team-b',
  templateUrl: './team-b.component.html',
  styleUrls: ['./team-b.component.css']
})
export class TeamBComponent {
  isShow: boolean = true;
  message: string = '';
  socket;

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('receive-race-speed', (result) => {
      console.log(result.data);
      if (result.data === '000000000') {
        this.isShow = true;
        return;
      }
      this.message = result.data;
      this.isShow = false;
    });
  }

  sendRaceSpeed() {
    console.log('TEAM B PUSH');
    this.socket.emit('send-race-speed', { data: 'Team B' });
  }
}
