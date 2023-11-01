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
    "นาย ฆนัท คารมปราชญ์",
    "นางสาว พิชชา รุ่งสว่าง",
    "นาย ฉินนรณ ชัยรัตนาวรรณ",
    "นาย สุรเลิศ จิรวังโส",
    "นางสาว อิษยา วาณิชวรานนท์",
    "นางสาว ธัญญลักษณ์ เขียวแท้",
    "นาย ศิวกร ศรีสกาวกุล",
    "นาย อิศรา เปรมเกิด",
    "นางสาว ณุทยา เข็มเจริญ",
    "นาย ภัคพล บัวโทน",
    "นาย พิทวัส ชัยวุฒินันท์",
    "นาย วีร์ อายุวนานนท์",
    "นาย ลัทธพล แพ่งสภา",
    "นางสาว วิภาดา แสนบุตร",
    "นางสาว ศิริวรรณ กุลละวณิชย์",
    "นาย วงศธร กุลศิริรังสรรค์",
    "นางสาวธัญลักษณ์ เอียดเจริญ",
    "นางสาวภัทราวรรณ วุฒินันติวงศ์",
    "นางสาวสุชาดา ปัญญาวีรพัชร",
    "นายสหัสวรรษ จันทนวรานนท์",
    "นาย สุริณณ์ ลายนอก",
    "นาย วัชระ สวนธนู",
    "นางสาว นุชศรา บุญมี",
    "นาย ชัยรินทร์ เนียมสุวรรณ",
    "นาย ยศธร เอี่ยมฤทธิ์",
    "นางสาว นุสรา ใจจา",
    "นาย ฮัมบาลี สาแม",
    "นาย ขจรเกียรติ แซ่อึ๋ง",
    "นาย ชัยพงษ์ ฮวบเพชร",
    "นาย ธนากร สอนสุด",
    "นาย ชานันท์ เหล่าอารีจิตกุล",
    "นาย เกริกพล นามประมา",
    "นาย สิริวัฒน์ บุญเสาร์",
    "นายสหัสวรรษ จันทนวรานนท์",
    "นางพรทิพย์ อินกัน",
    "นายธนเดช ธนากรวรกิจ",
    "นางสาวพรพิมล สุวรรณรัตน์",
    "นายเชิดศักดิ์ กิ่งก้าน",
    "นายอธิวัฒน์ กิจวนิชย์ภาสุ",
    "นางสาวปานตา จงกลสิริ",
    "นายนนทวัฒน์ การะเวก",
    "นางสาวอัจฉรา ลาน้ำคำ",
    "นางรุ่งนภา โฆษิตจินดา",
    "นายชญา หิรัญเจริญเวช",
    "นางสาวน้องเรียม สิงห์ทอง",
    "นายธนชาติ นิละนนท์",
    "นายสุรเดช ศรีประดิษฐ์",
    "นางสาวจันท์ญาณี อนันต์ธนสาร",
    "นายภูมิสรรค์ ปัญจบูรณปกรณ์",
    "นางสาวจุฑาสิณี พรภู่พุทธคุณ",
    "นายกำพล ศรธนะรัตน์",
    "นายวิบูลย์ ภัทรพิบูล",
    "นายอภิสิทธิ์ สุขสาคร"
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
