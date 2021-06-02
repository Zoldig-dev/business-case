import { Component, Input, OnInit } from '@angular/core';
import { IDocuments } from '../app.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() slides!: IDocuments[];
  currentIndex:number=0;
  constructor() {}

  ngOnInit(): void {}

  next(){
    if(this.currentIndex<this.slides.length-1){
      this.currentIndex++
    }else{
      this.currentIndex=0;
    }
  }
  prev(){
    if(this.currentIndex>0){
      this.currentIndex--;
    }else{
      this.currentIndex=this.slides.length-1;
    }
  }
}
