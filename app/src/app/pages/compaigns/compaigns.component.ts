import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-compaigns',
  imports: [RouterModule, IonContent],
  templateUrl: './compaigns.component.html',
  styleUrls: ['./compaigns.component.scss'],
  standalone: true,
})
export class CompaignsComponent {}