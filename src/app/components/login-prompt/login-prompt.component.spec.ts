import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPromptComponent } from './login-prompt.component';

describe('LoginPromptComponent', () => {
  let component: LoginPromptComponent;
  let fixture: ComponentFixture<LoginPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPromptComponent]
    });
    fixture = TestBed.createComponent(LoginPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
