import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { ChildService } from '../../core/services/child.service';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
  ],
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {

  children: any[] = [];

  constructor(
    private childService: ChildService,
  ) {}

  async ngOnInit() {

    try {

      this.children = await this.childService.getChildren();

      console.log(this.children);

    } catch (error) {

      console.error(error);

    }

  }

}