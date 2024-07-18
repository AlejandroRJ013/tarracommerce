import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loginError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formLogin.valid) {
      this.authService
        .login(this.formLogin.value)
        .then((response) => {
          console.log('Inicio de sesión exitoso:', response);
          this.router.navigate(['/inicio']);
        })
        .catch((error) => {
          console.error('Error en el inicio de sesión:', error);
          this.handleLoginError(error);
        });
    }
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then((response) => {
        console.log('Inicio de sesión con Google exitoso:', response);
        this.router.navigate(['/inicio']);
      })
      .catch((error) => {
        console.error('Error en el inicio de sesión con Google:', error);
        this.handleLoginError(error);
      });
  }

  private handleLoginError(error: any) {
    this.loginError = null;
    switch (error.code) {
      case 'auth/invalid-email':
        this.loginError = 'El formato del email es inválido.';
        break;
      case 'auth/user-disabled':
        this.loginError = 'Este usuario ha sido deshabilitado.';
        break;
      case 'auth/user-not-found':
        this.loginError = 'No se encontró ningún usuario con este email.';
        break;
      case 'auth/wrong-password':
        this.loginError = 'La contraseña es incorrecta.';
        break;
      default:
        this.loginError =
          'Ocurrió un error durante el inicio de sesión. Por favor, inténtelo de nuevo.';
        break;
    }
  }
}
