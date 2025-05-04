import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      register: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email, password, and confirmPassword fields', () => {
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
    expect(component.registerForm.contains('confirmPassword')).toBeTruthy();
  });

  it('should make the email control required', () => {
    const control = component.registerForm.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    const control = component.registerForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the confirmPassword control required', () => {
    const control = component.registerForm.get('confirmPassword');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should set errorMessage if passwords do not match', () => {
    component.registerForm.setValue({ email: 'test@test.com', password: 'password', confirmPassword: 'differentPassword' });
    component.onSubmit();
    expect(component.errorMessage).toBe('Passwords do not match');
  });

  it('should call AuthService register method on form submit', () => {
    const registerSpy = jest.spyOn(authServiceMock, 'register').mockReturnValue(of({}));
    component.registerForm.setValue({ email: 'test@test.com', password: 'password', confirmPassword: 'password' });
    component.onSubmit();
    expect(registerSpy).toHaveBeenCalledWith('test@test.com', 'password');
  });

  it('should set errorMessage if registration fails', () => {
    jest.spyOn(authServiceMock, 'register').mockReturnValue(throwError('Registration failed'));
    component.registerForm.setValue({ email: 'test@test.com', password: 'password', confirmPassword: 'password' });
    component.onSubmit();
    expect(component.errorMessage).toBe('Registration failed');
  });
});
