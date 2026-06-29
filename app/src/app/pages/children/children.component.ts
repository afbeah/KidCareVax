import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addCircleOutline, arrowBackOutline, arrowForwardOutline, peopleOutline } from 'ionicons/icons';

import { ChildService } from '../../core/services/child.service';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonIcon,
  ],
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {

  children: any[] = [];

  constructor(
    private childService: ChildService,
  ) {

    addIcons({
      peopleOutline,
      addCircleOutline,
      arrowForwardOutline,
      arrowBackOutline
    });

  }

  async ngOnInit() {

    try {

      this.children = await this.childService.getChildren();
      console.log('Children:', this.children);
      console.log('Quantidade:', this.children.length)

      console.log(this.children);

    } catch (error) {

      console.error(error);

    }

  }

}