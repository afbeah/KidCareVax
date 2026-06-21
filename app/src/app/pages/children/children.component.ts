import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [RouterModule, IonContent],
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})

export class ChildrenComponent {}
