import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-child-details',
  imports:[RouterModule, IonContent],
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss'],
  standalone: true,
})
export class ChildDetailsComponent  {}
