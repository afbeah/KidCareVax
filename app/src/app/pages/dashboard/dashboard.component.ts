import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { peopleOutline, medicalOutline, timeOutline, megaphoneOutline, arrowForwardOutline, arrowBackOutline, addCircleOutline } from 'ionicons/icons';

import { ChildService } from '../../core/services/child.service';
import { VaccineService } from '../../core/services/vaccine.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    IonContent,
    IonIcon,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  totalChildren = 0;

  pendingVaccines = 0;

  overdueVaccines = 0;

  constructor(
    private childService: ChildService,
    private vaccineService: VaccineService,
  ) {
    
    addIcons({
      peopleOutline,
      medicalOutline,
      timeOutline,
      megaphoneOutline,
      arrowForwardOutline,
      arrowBackOutline,
      addCircleOutline
    });
  }

  async ngOnInit() {

    try {

      const children =
        await this.childService.getChildren();
        console.log('Dashboard:', children);
        console.log('Quantidade:', children.length);

      const vaccines =
        await this.vaccineService.getAllVaccines();

      this.totalChildren = children.length;

      this.pendingVaccines =
        vaccines.filter(
          (v: any) => v.status === 'Pendente'
        ).length;

      this.overdueVaccines =
        vaccines.filter(
          (v: any) => v.status === 'Atrasada'
        ).length;

    } catch (error) {

      console.error(error);

    }

  }

}
