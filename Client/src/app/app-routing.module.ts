import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeamAComponent } from './components/team-a/team-a.component';
import { TeamBComponent } from './components/team-b/team-b.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { QuizAudienceComponent } from './components/quiz-audience/quiz-audience.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'team-a', component: TeamAComponent },
  { path: 'team-b', component: TeamBComponent },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'quiz', component: QuizAudienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
