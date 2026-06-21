import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { ChildService } from '../../core/services/child.service';

@Component({
  selector: 'app-add-child',
  standalone: true,
  imports: [
    IonContent,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss'],
})
export class AddChildComponent {

  name = '';
  birthDate = '';
  gender = '';

  constructor(
    private childService: ChildService,
    private router: Router,
  ) {}

  async saveChild() {

    try {

      await this.childService.createChild(
        this.name,
        this.birthDate,
        this.gender,
      );

      alert('Criança cadastrada com sucesso!');

      this.router.navigate(['/children']);

    } catch (error) {

      console.error(error);

      alert('Erro ao cadastrar criança');

    }

  }

}