import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
  ],
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent {

  campaigns = [
    {
      title: 'Influenza 2026',
      description:
        'Disponível para crianças de 6 meses a 5 anos.',
      status: 'Ativa',
    },
    {
      title: 'Multivacinação Infantil',
      description:
        'Atualização da caderneta vacinal infantil.',
      status: 'Ativa',
    },
    {
      title: 'Febre Amarela',
      description:
        'Disponível para regiões com recomendação sanitária.',
      status: 'Ativa',
    },
  ];

}
