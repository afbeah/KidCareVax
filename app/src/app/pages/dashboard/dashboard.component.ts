import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  peopleOutline,
  medicalOutline,
  timeOutline,
  megaphoneOutline,
  arrowForwardOutline,
  arrowBackOutline,
  addCircleOutline,
  logOutOutline,
} from 'ionicons/icons';

import { AuthService } from '../../core/services/auth.service';
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
    private authService: AuthService,
    private router: Router,
  ) {

    addIcons({
      peopleOutline,
      medicalOutline,
      timeOutline,
      megaphoneOutline,
      arrowForwardOutline,
      arrowBackOutline,
      addCircleOutline,
      logOutOutline,
    });

  }

  async ngOnInit() {

    try {

      const user = await this.authService.waitForAuth();

      if (!user) {

        this.router.navigate(['/login']);
        return;

      }

      await this.loadDashboard();

    } catch (error) {

      console.error(error);

    }

  }

  private async loadDashboard() {

    const children =
      await this.childService.getChildren();

    this.totalChildren = children.length;

    const vaccines =
      await this.vaccineService.getAllVaccines();

    this.pendingVaccines =
      vaccines.filter(
        (v: any) => v.status === 'Pendente'
      ).length;

    this.overdueVaccines =
      vaccines.filter(
        (v: any) => v.status === 'Atrasada'
      ).length;

  }

  async logout() {

    try {

      await this.authService.logout();

      this.router.navigate(['/login']);

    } catch (error) {

      console.error(error);

      alert('Erro ao sair da aplicação.');

    }

  }

}