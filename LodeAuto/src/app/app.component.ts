import { Component } from '@angular/core';
export interface IDocuments {
  src: string;
  name: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LodeAuto';
  public slides: IDocuments[] = [
    {
      src: '../assets/images/carousel-1.jpg',
      name: 'img1',
      description: 'voiture',
    },
    {
      src: '../assets/images/carousel-2.jpg',
      name: 'img2',
      description: 'voiture',
    },
  ];
}
