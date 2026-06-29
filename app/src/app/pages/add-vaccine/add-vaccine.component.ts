import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, medicalOutline,saveOutline, } from 'ionicons/icons';

import { VaccineService } from '../../core/services/vaccine.service';
import { ChildService } from '../../core/services/child.service';

@Component({
  selector: 'app-add-vaccine',
  standalone: true,
  imports: [
    IonContent,
    RouterModule,
    FormsModule,
    IonIcon,
  ],
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.scss'],
})
export class AddVaccineComponent {

  name = '';
  applicationDate = '';
  status = '';

  constructor(
    private vaccineService: VaccineService,
    private childService: ChildService,
    private router: Router,
  ) {
    addIcons({
      arrowBackOutline,
      medicalOutline,
      saveOutline,
    });
  }

  async saveVaccine() {

    try {

      const child = await this.childService.getFirstChild();

      if (!child) {
        alert('Nenhuma criança cadastrada.');
        return;
      }

      await this.vaccineService.createVaccine(
        child.id,
        this.name,
        this.applicationDate,
        this.status,
      );

      alert('Vacina registrada com sucesso!');

      this.router.navigate(['/child-details']);

    } catch (error) {

      console.error(error);

      alert('Erro ao registrar vacina');

    }

  }

}