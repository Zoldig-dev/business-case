import {Component, Input, OnInit} from '@angular/core';
import {Voiture} from "../models/voiture";

@Component({
  selector: 'app-v-card',
  templateUrl: './v-card.component.html',
  styleUrls: ['./v-card.component.scss']
})
export class VCardComponent implements OnInit {
  @Input() public voiture!: Voiture;
  constructor() { }

  ngOnInit(): void {
  }

}
