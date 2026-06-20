import { Component } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, IonContent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

}