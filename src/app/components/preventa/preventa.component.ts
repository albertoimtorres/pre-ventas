import { Component, OnInit } from '@angular/core';
import { Preventa } from '../../models/preventa.models';

@Component({
  selector: 'app-preventa',
  templateUrl: './preventa.component.html',
  styleUrls: ['./preventa.component.css']
})
export class PreventaComponent implements OnInit {

  fuentePreventa: Preventa;

  constructor() {
  }

  ngOnInit(): void {

  }

  actualizaPreventa = (event) => {
    this.fuentePreventa = event;
  }

}
