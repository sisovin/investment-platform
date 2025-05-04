import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      login: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password fields', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the email control required', () => {
    const control = component.loginForm.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    const control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should call AuthService login method on form submit', () => {
    const loginSpy = jest.spyOn(authServiceMock, 'login').mockReturnValue(of({}));
    component.loginForm.setValue({ email: 'test@test.com', password: 'password' });
    component.onSubmit();
    expect(loginSpy).toHaveBeenCalledWith('test@test.com', 'password');
  });

  it('should set errorMessage if login fails', () => {
    jest.spyOn(authServiceMock, 'login').mockReturnValue(throwError('Invalid email or password'));
    component.loginForm.setValue({ email: 'test@test.com', password: 'password' });
    component.onSubmit();
    expect(component.errorMessage).toBe('Invalid email or password');
  });
});
