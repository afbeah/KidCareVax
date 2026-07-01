import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
    private route: ActivatedRoute,
  ) {
    addIcons({
      arrowBackOutline,
      medicalOutline,
      saveOutline,
    });
  }

  async saveVaccine() {

    try {

      const childId = this.route.snapshot.paramMap.get('id');

      if (!childId) {
        alert('Criança não encontrada');
        return;
      }

      await this.vaccineService.createVaccine(
        childId,
        this.name,
        this.applicationDate,
        this.status,
      );

      alert('Vacina registrada com sucesso!');

      this.router.navigate(['/child-details', childId]);

    } catch (error) {

      console.error(error);

      alert('Erro ao registrar vacina');

    }

  }

}