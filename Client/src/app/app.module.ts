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
