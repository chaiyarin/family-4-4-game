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
    {
      src: 'assets/staff/01.png',
      title: '01'
    },
    {
      src: 'assets/staff/02.png',
      title: '02'
    },
    {
      src: 'assets/staff/03.png',
      title: '03'
    },
    {
      src: 'assets/staff/04.png',
      title: '04'
    },
    {
      src: 'assets/staff/05.png',
      title: '05'
    },
    {
      src: 'assets/staff/06.png',
      title: '06'
    },
    {
      src: 'assets/staff/07.png',
      title: '07'
    },
    {
      src: 'assets/staff/08.png',
      title: '08'
    },
    {
      src: 'assets/staff/09.png',
      title: '09'
    },
    {
      src: 'assets/staff/10.png',
      title: '10'
    },
    {
      src: 'assets/staff/11.png',
      title: '11'
    },
    {
      src: 'assets/staff/12.png',
      title: '12'
    },
    {
      src: 'assets/staff/13.png',
      title: '13'
    },
    {
      src: 'assets/staff/14.png',
      title: '14'
    },
    {
      src: 'assets/staff/15.png',
      title: '15'
    },
    {
      src: 'assets/staff/16.png',
      title: '16'
    },
    {
      src: 'assets/staff/17.png',
      title: '17'
    },
    {
      src: 'assets/staff/18.png',
      title: '18'
    },
    {
      src: 'assets/staff/19.png',
      title: '19'
    },
    {
      src: 'assets/staff/20.png',
      title: '20'
    },
    {
      src: 'assets/staff/21.png',
      title: '21'
    },
    {
      src: 'assets/staff/22.png',
      title: '22'
    },
    {
      src: 'assets/staff/23.png',
      title: '23'
    },
    {
      src: 'assets/staff/24.png',
      title: '24'
    },
    {
      src: 'assets/staff/25.png',
      title: '25'
    },
  ]
  images1 = [
    {
      src: 'assets/staff/25.png',
      title: '25'
    },
    {
      src: 'assets/staff/01.png',
      title: '01'
    },
    {
      src: 'assets/staff/03.png',
      title: '03'
    },
    {
      src: 'assets/staff/04.png',
      title: '04'
    },
    {
      src: 'assets/staff/05.png',
      title: '05'
    },
    {
      src: 'assets/staff/02.png',
      title: '02'
    },
    {
      src: 'assets/staff/07.png',
      title: '07'
    },
    {
      src: 'assets/staff/06.png',
      title: '06'
    },
    {
      src: 'assets/staff/08.png',
      title: '08'
    },
    {
      src: 'assets/staff/10.png',
      title: '10'
    },
    {
      src: 'assets/staff/11.png',
      title: '11'
    },
    {
      src: 'assets/staff/09.png',
      title: '09'
    },
    {
      src: 'assets/staff/12.png',
      title: '12'
    },
    {
      src: 'assets/staff/14.png',
      title: '14'
    },
    {
      src: 'assets/staff/20.png',
      title: '20'
    },
    {
      src: 'assets/staff/21.png',
      title: '21'
    },
    {
      src: 'assets/staff/15.png',
      title: '15'
    },
    {
      src: 'assets/staff/13.png',
      title: '13'
    },
    {
      src: 'assets/staff/16.png',
      title: '16'
    },
    {
      src: 'assets/staff/18.png',
      title: '18'
    },
    {
      src: 'assets/staff/17.png',
      title: '17'
    },
    {
      src: 'assets/staff/19.png',
      title: '19'
    },

    {
      src: 'assets/staff/22.png',
      title: '22'
    },
    {
      src: 'assets/staff/23.png',
      title: '23'
    },
    {
      src: 'assets/staff/24.png',
      title: '24'
    },

  ]

  images2 = [
    {
      src: 'assets/staff/01.png',
      title: '01'
    },
    {
      src: 'assets/staff/02.png',
      title: '02'
    },
    {
      src: 'assets/staff/03.png',
      title: '03'
    },
    {
      src: 'assets/staff/04.png',
      title: '04'
    },
    {
      src: 'assets/staff/05.png',
      title: '05'
    },
    {
      src: 'assets/staff/06.png',
      title: '06'
    },
    {
      src: 'assets/staff/07.png',
      title: '07'
    },
    {
      src: 'assets/staff/08.png',
      title: '08'
    },
    {
      src: 'assets/staff/09.png',
      title: '09'
    },
    {
      src: 'assets/staff/10.png',
      title: '10'
    },
    {
      src: 'assets/staff/11.png',
      title: '11'
    },
    {
      src: 'assets/staff/12.png',
      title: '12'
    },
    {
      src: 'assets/staff/13.png',
      title: '13'
    },
    {
      src: 'assets/staff/14.png',
      title: '14'
    },
    {
      src: 'assets/staff/15.png',
      title: '15'
    },
    {
      src: 'assets/staff/16.png',
      title: '16'
    },
    {
      src: 'assets/staff/17.png',
      title: '17'
    },
    {
      src: 'assets/staff/18.png',
      title: '18'
    },
    {
      src: 'assets/staff/19.png',
      title: '19'
    },
    {
      src: 'assets/staff/20.png',
      title: '20'
    },
    {
      src: 'assets/staff/21.png',
      title: '21'
    },
    {
      src: 'assets/staff/22.png',
      title: '22'
    },
    {
      src: 'assets/staff/23.png',
      title: '23'
    },
    {
      src: 'assets/staff/24.png',
      title: '24'
    },
    {
      src: 'assets/staff/25.png',
      title: '25'
    },
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
        this.isShowRandom = true;
        this.shuffle()
      } else if (id == 'PTum') {
        this.isShowRandom1 = true;
      } else {
        this.isShowRandom2 = true;
      }
      const duration = 6000;
      if (symbolsContainer) {
        symbolsContainer.style.left = `-8300px`;
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
