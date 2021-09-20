import { Component, OnInit, OnChanges } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Voiture} from "../models/voiture";

@Component({
  selector: 'app-v-list',
  templateUrl: './v-list.component.html',
  styleUrls: ['./v-list.component.scss']
})
export class VListComponent implements OnInit {
  public cars: Voiture[] = [];
  constructor(
    private api: ApiService,
  ) {
    this.api.getVoiture().then((res) => {
      this.cars = res;
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.api.getVoiture().then(res => {
      this.cars = res;
    })
  }

}
