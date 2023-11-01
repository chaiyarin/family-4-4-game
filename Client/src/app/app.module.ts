import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { TeamAComponent } from './components/team-a/team-a.component';
import { TeamBComponent } from './components/team-b/team-b.component';
import { QuizAdminComponent } from './components/quiz-admin/quiz-admin.component';
import { QuizAudienceComponent } from './components/quiz-audience/quiz-audience.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBEbQ7crvo4-gf8kve2mMqRtoupT1IJ07k",
  authDomain: "game-show-d0890.firebaseapp.com",
  projectId: "game-show-d0890",
  storageBucket: "game-show-d0890.appspot.com",
  messagingSenderId: "924111307676",
  appId: "1:924111307676:web:acbdd34fecc0de4c5cfe59",
  measurementId: "G-VRDS6RQGRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TeamAComponent,
    TeamBComponent,
    QuizAdminComponent,
    QuizAudienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
