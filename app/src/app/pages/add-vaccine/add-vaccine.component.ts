import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-vaccine',
  standalone: true,
  imports: [IonContent, RouterModule],
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.scss'],
})

export class AddVaccineComponent {}
