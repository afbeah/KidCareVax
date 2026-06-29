import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, personCircleOutline, medicalOutline, megaphoneOutline, addCircleOutline } from 'ionicons/icons';

import { ChildService } from '../../core/services/child.service';
import { VaccineService } from '../../core/services/vaccine.service';

@Component({
  selector: 'app-child-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonIcon,
  ],
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss'],
})
export class ChildDetailsComponent implements OnInit {

  child: any = null;

  vaccines: any[] = [];

  vaccinationStatus = 'Em dia';

  constructor(
    private childService: ChildService,
    private vaccineService: VaccineService,
  ) {
    addIcons({
      arrowBackOutline,
      personCircleOutline,
      medicalOutline,
      megaphoneOutline,
      addCircleOutline,
    });
  }

  async ngOnInit() {

    try {

      this.child = await this.childService.getFirstChild();

      if (!this.child) {
        return;
      }

      this.vaccines =
        await this.vaccineService.getVaccinesByChild(
          this.child.id
        );

      const hasOverdue =
        this.vaccines.some(
          (v: any) => v.status === 'Atrasada'
        );

      const hasPending =
        this.vaccines.some(
          (v: any) => v.status === 'Pendente'
        );

      if (hasOverdue) {

        this.vaccinationStatus = 'Atrasada';

      } else if (hasPending) {

        this.vaccinationStatus = 'Pendente';

      } else {

        this.vaccinationStatus = 'Em dia';

      }

    } catch (error) {

      console.error(error);

    }

  }

}