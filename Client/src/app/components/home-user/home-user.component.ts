import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent {
  images = [
    { src: 'assets/staff/01.png', title: '01' },
    { src: 'assets/staff/02.png', title: '02' },
    { src: 'assets/staff/03.png', title: '03' },
    { src: 'assets/staff/04.png', title: '04' },
    { src: 'assets/staff/05.png', title: '05' },
    { src: 'assets/staff/06.png', title: '06' },
    { src: 'assets/staff/07.png', title: '07' },
    { src: 'assets/staff/08.png', title: '08' },
    { src: 'assets/staff/09.png', title: '09' },
    { src: 'assets/staff/10.png', title: '10' },
    { src: 'assets/staff/11.png', title: '11' },
    { src: 'assets/staff/12.png', title: '12' },
    { src: 'assets/staff/13.png', title: '13' },
    { src: 'assets/staff/14.png', title: '14' },
    { src: 'assets/staff/15.png', title: '15' },
    { src: 'assets/staff/16.png', title: '16' },
    { src: 'assets/staff/17.png', title: '17' },
    { src: 'assets/staff/18.png', title: '18' },
    { src: 'assets/staff/19.png', title: '19' },
    { src: 'assets/staff/20.png', title: '20' },
    { src: 'assets/staff/21.png', title: '21' },
    { src: 'assets/staff/22.png', title: '22' },
    { src: 'assets/staff/23.png', title: '23' },
    { src: 'assets/staff/24.png', title: '24' },
    { src: 'assets/staff/25.png', title: '25' },
    { src: 'assets/staff/27.png', title: '27' },
    { src: 'assets/staff/28.png', title: '28' },
    { src: 'assets/staff/29.png', title: '29' },
    { src: 'assets/staff/30.png', title: '30' },
    { src: 'assets/staff/31.png', title: '31' },
    { src: 'assets/staff/32.png', title: '32' },
    { src: 'assets/staff/33.png', title: '33' },
    { src: 'assets/staff/34.png', title: '34' },
    { src: 'assets/staff/35.png', title: '35' },
    { src: 'assets/staff/36.png', title: '36' },
    { src: 'assets/staff/37.png', title: '37' },
    { src: 'assets/staff/38.png', title: '38' },
    { src: 'assets/staff/39.png', title: '39' },
    { src: 'assets/staff/40.png', title: '40' },
    { src: 'assets/staff/41.png', title: '41' },
    { src: 'assets/staff/42.png', title: '42' },
    { src: 'assets/staff/43.png', title: '43' },
    { src: 'assets/staff/44.png', title: '44' },
    { src: 'assets/staff/45.png', title: '45' },
    { src: 'assets/staff/46.png', title: '46' },
    { src: 'assets/staff/47.png', title: '47' },
    { src: 'assets/staff/48.png', title: '48' },
    { src: 'assets/staff/49.png', title: '49' },
    { src: 'assets/staff/50.png', title: '50' },
    { src: 'assets/staff/51.png', title: '51' },
    { src: 'assets/staff/52.png', title: '52' },
    { src: 'assets/staff/53.png', title: '53' },
    { src: 'assets/staff/54.png', title: '54' },
    { src: 'assets/staff/55.png', title: '55' },
    { src: 'assets/staff/56.png', title: '56' },
    { src: 'assets/staff/57.png', title: '57' },
    { src: 'assets/staff/58.png', title: '58' },
    { src: 'assets/staff/59.png', title: '59' },
    { src: 'assets/staff/60.png', title: '60' },
    { src: 'assets/staff/61.png', title: '61' },
    { src: 'assets/staff/62.png', title: '62' },
    { src: 'assets/staff/63.png', title: '63' },
    { src: 'assets/staff/64.png', title: '64' },
    { src: 'assets/staff/65.png', title: '65' },
    { src: 'assets/staff/66.png', title: '66' },
    { src: 'assets/staff/67.png', title: '67' },
    { src: 'assets/staff/68.png', title: '68' },
  ]
  images1 = [
    { src: 'assets/staff/25.png',title: '25' },
    { src: 'assets/staff/01.png',title: '01' },
    { src: 'assets/staff/03.png',title: '03' },
    { src: 'assets/staff/04.png',title: '04' },
    { src: 'assets/staff/05.png',title: '05' },
    { src: 'assets/staff/02.png',title: '02' },
    { src: 'assets/staff/07.png',title: '07' },
    { src: 'assets/staff/06.png',title: '06' },
    { src: 'assets/staff/08.png',title: '08' },
    { src: 'assets/staff/10.png',title: '10' },
    { src: 'assets/staff/11.png',title: '11' },
    { src: 'assets/staff/09.png',title: '09' },
    { src: 'assets/staff/12.png',title: '12' },
    { src: 'assets/staff/14.png',title: '14' },
    { src: 'assets/staff/20.png',title: '20' },
    { src: 'assets/staff/27.png', title: '27' },
    { src: 'assets/staff/28.png', title: '28' },
    { src: 'assets/staff/29.png', title: '29' },
    { src: 'assets/staff/30.png', title: '30' },
    { src: 'assets/staff/31.png', title: '31' },
    { src: 'assets/staff/32.png', title: '32' },
    { src: 'assets/staff/33.png', title: '33' },
    { src: 'assets/staff/49.png', title: '49' }, // พี่ตั๊ม
    { src: 'assets/staff/35.png', title: '35' },
    { src: 'assets/staff/36.png', title: '36' },
    { src: 'assets/staff/37.png', title: '37' },
    { src: 'assets/staff/38.png', title: '38' },
    { src: 'assets/staff/39.png', title: '39' },
    { src: 'assets/staff/40.png', title: '40' },
    { src: 'assets/staff/41.png', title: '41' },
    { src: 'assets/staff/42.png', title: '42' },
    { src: 'assets/staff/43.png', title: '43' },
    { src: 'assets/staff/44.png', title: '44' },
    { src: 'assets/staff/45.png', title: '45' },
    { src: 'assets/staff/46.png', title: '46' },
    { src: 'assets/staff/47.png', title: '47' },
    { src: 'assets/staff/48.png', title: '48' },
    { src: 'assets/staff/67.png', title: '67' },
    { src: 'assets/staff/50.png', title: '50' },
    { src: 'assets/staff/51.png', title: '51' },
    { src: 'assets/staff/52.png', title: '52' },
    { src: 'assets/staff/53.png', title: '53' },
    { src: 'assets/staff/54.png', title: '54' },
    { src: 'assets/staff/55.png', title: '55' },
    { src: 'assets/staff/56.png', title: '56' },
    { src: 'assets/staff/57.png', title: '57' },
    { src: 'assets/staff/58.png', title: '58' },
    { src: 'assets/staff/59.png', title: '59' },
    { src: 'assets/staff/60.png', title: '60' },
    { src: 'assets/staff/61.png', title: '61' },
    { src: 'assets/staff/62.png', title: '62' },
    { src: 'assets/staff/63.png', title: '63' },
    { src: 'assets/staff/64.png', title: '64' },
    { src: 'assets/staff/65.png', title: '65' },
    { src: 'assets/staff/66.png', title: '66' },
    { src: 'assets/staff/34.png', title: '34' },
    { src: 'assets/staff/68.png', title: '68' },
    { src: 'assets/staff/21.png', title: '21' },
    { src: 'assets/staff/15.png', title: '15' },
    { src: 'assets/staff/13.png', title: '13' },
    { src: 'assets/staff/16.png', title: '16' },
    { src: 'assets/staff/18.png', title: '18' },
    { src: 'assets/staff/17.png', title: '17' },
    { src: 'assets/staff/19.png', title: '19' },
    { src: 'assets/staff/22.png', title: '22' },
    { src: 'assets/staff/23.png', title: '23' },
    { src: 'assets/staff/24.png', title: '24' },
  ]
  
  images2 = [
    { src: 'assets/staff/01.png',title: '01' },
    { src: 'assets/staff/02.png',title: '02' },
    { src: 'assets/staff/03.png',title: '03' },
    { src: 'assets/staff/04.png',title: '04' },
    { src: 'assets/staff/05.png',title: '05' },
    { src: 'assets/staff/27.png', title: '27' },
    { src: 'assets/staff/28.png', title: '28' },
    { src: 'assets/staff/29.png', title: '29' },
    { src: 'assets/staff/30.png', title: '30' },
    { src: 'assets/staff/31.png', title: '31' },
    { src: 'assets/staff/32.png', title: '32' },
    { src: 'assets/staff/33.png', title: '33' },
    { src: 'assets/staff/34.png', title: '34' },
    { src: 'assets/staff/35.png', title: '35' },
    { src: 'assets/staff/36.png', title: '36' },
    { src: 'assets/staff/37.png', title: '37' },
    { src: 'assets/staff/38.png', title: '38' },
    { src: 'assets/staff/39.png', title: '39' },
    { src: 'assets/staff/40.png', title: '40' },
    { src: 'assets/staff/41.png', title: '41' },
    { src: 'assets/staff/42.png', title: '42' },
    { src: 'assets/staff/43.png', title: '43' },
    { src: 'assets/staff/67.png', title: '67' }, // พี่ภา
    { src: 'assets/staff/45.png', title: '45' },
    { src: 'assets/staff/46.png', title: '46' },
    { src: 'assets/staff/47.png', title: '47' },
    { src: 'assets/staff/48.png', title: '48' },
    { src: 'assets/staff/44.png', title: '44' },
    { src: 'assets/staff/50.png', title: '50' },
    { src: 'assets/staff/51.png', title: '51' },
    { src: 'assets/staff/52.png', title: '52' },
    { src: 'assets/staff/53.png', title: '53' },
    { src: 'assets/staff/54.png', title: '54' },
    { src: 'assets/staff/55.png', title: '55' },
    { src: 'assets/staff/56.png', title: '56' },
    { src: 'assets/staff/57.png', title: '57' },
    { src: 'assets/staff/58.png', title: '58' },
    { src: 'assets/staff/59.png', title: '59' },
    { src: 'assets/staff/60.png', title: '60' },
    { src: 'assets/staff/61.png', title: '61' },
    { src: 'assets/staff/62.png', title: '62' },
    { src: 'assets/staff/63.png', title: '63' },
    { src: 'assets/staff/64.png', title: '64' },
    { src: 'assets/staff/65.png', title: '65' },
    { src: 'assets/staff/66.png', title: '66' },
    { src: 'assets/staff/49.png', title: '49' },
    { src: 'assets/staff/68.png', title: '68' },
    { src: 'assets/staff/06.png',title: '06' },
    { src: 'assets/staff/07.png',title: '07' },
    { src: 'assets/staff/08.png',title: '08' },
    { src: 'assets/staff/09.png',title: '09' },
    { src: 'assets/staff/10.png',title: '10' },
    { src: 'assets/staff/11.png',title: '11' },
    { src: 'assets/staff/12.png',title: '12' },
    { src: 'assets/staff/13.png',title: '13' },
    { src: 'assets/staff/14.png',title: '14' },
    { src: 'assets/staff/15.png',title: '15' },
    { src: 'assets/staff/16.png',title: '16' },
    { src: 'assets/staff/17.png',title: '17' },
    { src: 'assets/staff/18.png',title: '18' },
    { src: 'assets/staff/19.png',title: '19' },
    { src: 'assets/staff/20.png',title: '20' },
    { src: 'assets/staff/21.png',title: '21' },
    { src: 'assets/staff/22.png',title: '22' },
    { src: 'assets/staff/23.png',title: '23' },
    { src: 'assets/staff/24.png',title: '24' },
    { src: 'assets/staff/25.png',title: '25' },
  ]
  socket;

  isShowRandom = false;
  isShowRandom1 = false;
  isShowRandom2 = false;
  disableButton = false;
  constructor() {
    this.socket = io(environment.apiUrl);
    this.socket.on('receive-random', (result) => {
      this.random(result.data)
    })
  }



  random(id: string) {
    const symbolsContainer = document.querySelector(".flex-item") as HTMLElement;
    let isSpinning = false;
    if (!isSpinning) {
      isSpinning = true;
      if (id == '') {
        this.shuffle()
        this.isShowRandom = true;
      } else if (id == 'PTum') {
        this.isShowRandom1 = true;
      } else {
        this.isShowRandom2 = true;
      }
      const duration = 5000;
      if (symbolsContainer) {
        symbolsContainer.style.left = `-16000px`;
        this.disableButton = true;
        setTimeout(() => {
          isSpinning = false;
          setTimeout(() => {
            this.isShowRandom = false;
            this.isShowRandom1 = false;
            this.isShowRandom2 = false;
            this.disableButton = false;
            symbolsContainer.style.left = '0px';
          }, 2000);
        }, duration);
      }

    }
  }

  shuffle() {
    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.images[i], this.images[j]] = [this.images[j], this.images[i]];
    }
    return this.images;
  };

}
