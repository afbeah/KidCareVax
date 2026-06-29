import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, personAddOutline,saveOutline } from 'ionicons/icons';

import { ChildService } from '../../core/services/child.service';

@Component({
  selector: 'app-add-child',
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
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
  ) {
    addIcons({
      arrowBackOutline,
      personAddOutline,
      saveOutline
    });
  }

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