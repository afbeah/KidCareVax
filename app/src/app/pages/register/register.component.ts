import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  standalone:  true,
  imports: [RouterModule, IonContent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {}
