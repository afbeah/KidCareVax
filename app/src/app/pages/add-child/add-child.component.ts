import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-child',
  standalone: true,
  imports: [IonContent, RouterModule],
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss'],
})

export class AddChildComponent {}
