import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz-audience',
  templateUrl: './quiz-audience.component.html',
  styleUrls: ['./quiz-audience.component.css']
})
export class QuizAudienceComponent implements OnInit {

  senderName: string = '';
  answer: string = '';
  socket;
  quiz: any;
  nameList = [
    "นางสาวปิยนุช เข็มเพ็ชร์",
    "นาย วัชรพงษ์ กรรณสูต",
    "นาย ประสาธน์สุข ศิริกุล",
    "นาย ธรรมนูญ เพลิดเพลิน",
    "นาง พันธชุลี จิตรสมบูรณ์",
    "นาย โฆสิต อุฬารางกูร",
    "นาย สิทธา อาภาศิริกุล",
    "นาง ลลิต แสงมณี",
    "นางสาว สุพัตรา ศรีทอง",
    "นาย ก้องศักดิ์ จินต์วิริยะ",
    "นางสาว บุษยรัตน์ ตันสุทธิเวสส์",
    "นางสาว อลิสา แสงภู่วงษ์",
    "นาย ชยนวัจน์ พูลรัตน์วรกุล",
    "นาย สงกรานต์ จั่นเพ็ชร",
    "นาย ปพนภพ นวพาณิชย์เจริญ",
    "นางสาว พิชชา รุ่งสว่าง",
    "นาย สุรเลิศ จิรวังโส",
    "นางสาว อิษยา วาณิชวรานนท์",
    "นางสาว ธัญญลักษณ์ เขียวแท้",
    "นาย อิศรา เปรมเกิด",
    "นาย ภัคพล บัวโทน",
    "นาย วีร์ อายุวนานนท์",
    "นาย ลัทธพล แพ่งสภา",
    "นางสาว ปิยนุช เข็มเพ็ชร์",
    "นาย สหัสวรรษ จันทนวรานนท์",
    "นาย วัชระ สวนธนู",
    "นางสาว นุชศรา บุญมี",
    "นาย ชัยพงษ์ ฮวบเพชร",
    "นาย ธนากร สอนสุด",
    "นาย ชานันท์ เหล่าอารีจิตกุล",
    "นาย เกริกพล นามประมา",
    "นาย สิริวัฒน์ บุญเสาร์",
    "นาง พรทิพย์ อินกัน",
    "นาย ธนเดช ธนากรวรกิจ",
    "นางสาว พรพิมล สุวรรณรัตน์",
    "นาย เชิดศักดิ์ กิ่งก้าน",
    "นาย อธิวัฒน์ กิจวนิชย์ภาสุ ",
    "นางสาว ปานตา จงกลสิริ  ",
    "นาย นนทวัฒน์ การะเวก",
    "นางสาว อัจฉรา ลาน้ำคำ ",
    "นาง รุ่งนภา โฆษิตจินดา",
    "นาย ชญา หิรัญเจริญเวช ",
    "นางสาว น้องเรียม สิงห์ทอง",
    "นาย ธนชาติ นิละนนท์ ",
    "นาย สุรเดช ศรีประดิษฐ์",
    "นางสาว จันท์ญาณี อนันต์ธนสาร",
    "นาย ภูมิสรรค์ ปัญจบูรณปกรณ์",
    "นางสาว จุฑาสิณี พรภู่พุทธคุณ",
    "นาย อภิสิทธิ์ สุขสาคร",
    "นาย วรวุฒิ ศรีอุทัย",
    "นาย กำพล ศรธนะรัตน์",
    "นาย วิบูลย์ ภัทรพิบูล",
  ];

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

  sendAnswer(): void {

    if (this.senderName === '' || this.senderName === null) {
      alert('กรุณากรอกชื่อของท่านก่อนส่งคำตอบ');
      return;
    }

    this.socket.emit('send-answer', {
      data: {
        quizNo: this.quiz.quizNo,
        sender: this.senderName,
        answer: this.answer
      }
    });
    this.quiz = null;
    this.answer = '';
  }

  sendAnswerNumberAnothai(anothaiNumber: number): void {

    if (this.senderName === '' || this.senderName === null) {
      alert('กรุณากรอกชื่อของท่านก่อนส่งคำตอบ');
      return;
    }

    this.socket.emit('send-answer', {
      data: {
        quizNo: this.quiz.quizNo,
        sender: this.senderName,
        answer: anothaiNumber
      }
    });
    this.quiz = null;
  }

}
