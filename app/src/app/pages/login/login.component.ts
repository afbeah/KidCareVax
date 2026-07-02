import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    IonContent,
    FormsModule,
    IonIcon,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({
      arrowBackOutline,
    });
  }

  async login() {

    try {

      await this.authService.login(
        this.email,
        this.password
      );

      this.router.navigate(['/dashboard']);

    } catch (error: any) {

      console.error(error);

      switch (error.code) {

        case 'auth/invalid-credential':
          alert('E-mail ou senha inválidos.');
          break;

        case 'auth/user-not-found':
          alert('Usuário não encontrado.');
          break;

        default:
          alert('Erro ao realizar login.');
      }

    }

  }

}