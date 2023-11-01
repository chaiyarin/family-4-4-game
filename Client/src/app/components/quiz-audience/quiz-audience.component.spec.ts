import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAudienceComponent } from './quiz-audience.component';

describe('QuizAudienceComponent', () => {
  let component: QuizAudienceComponent;
  let fixture: ComponentFixture<QuizAudienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAudienceComponent]
    });
    fixture = TestBed.createComponent(QuizAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
