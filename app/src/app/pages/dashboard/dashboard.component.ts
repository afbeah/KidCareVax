import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { peopleOutline, medicalOutline, timeOutline, megaphoneOutline, arrowForwardOutline, arrowBackOutline, addCircleOutline, logOutOutline } from 'ionicons/icons';

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

  async logout() {
    try {
      await this.authService.logout();

      this.router.navigate(['/login'])
    } catch (error) {
      console.error(error);

      alert('Erro ao sair da aplicação.');
    }
  }

}
