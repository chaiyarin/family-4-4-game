import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBComponent } from './team-b.component';

describe('TeamBComponent', () => {
  let component: TeamBComponent;
  let fixture: ComponentFixture<TeamBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamBComponent]
    });
    fixture = TestBed.createComponent(TeamBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
