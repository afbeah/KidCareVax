import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, IonContent, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name = '';
  cpf = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      await this.authService.register(this.email, this.password);

      alert('Conta criada com sucesso!');

      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error(error);

      switch (error.code) {
        case 'auth/weak-password':
          alert('A senha deve possuir pelo menos 6 caracteres.');
          break;

        case 'auth/email-already-in-use':
          alert('Este e-mail já está cadastrado.');
          break;

        case 'auth/invalid-email':
          alert('E-mail inválido.');
          break;

        default:
          alert('Erro ao criar conta.');
      }
    }
  }
}
