import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-a',
  templateUrl: './team-a.component.html',
  styleUrls: ['./team-a.component.css']
})
export class TeamAComponent {
  isShow: boolean = true;
  message: string = '';
  socket;

  constructor() {
    this.socket = io(environment.apiUrl);

    this.socket.on('receive-race-speed', (result) => {
      console.log(result.data);
      if (result.data === '000000000') {
        this.isShow = true;
        return;
      }
      console.log('Hide Button');
      this.message = result.data;
      this.isShow = false;
    });
  }

  sendRaceSpeed() {
    console.log('TEAM A PUSH');
    this.socket.emit('send-race-speed', { data: 'Team A' });
  }
}