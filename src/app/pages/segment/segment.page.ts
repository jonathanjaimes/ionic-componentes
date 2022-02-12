import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ISuperheroe } from '../../interfaces/isuperheroe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  constructor(private servicio:DataService) { }

  ngOnInit() {
    this.superHeroes = this.servicio.getSuperHeroes()
  }

  // listaSuperHeroes:ISuperheroe[] = [];

  // marvel:ISuperheroe[] = [];

  // dcComics:ISuperheroe[] = [];

  superHeroes:Observable<any>
  
  publisher: string = ''

  segmentChanged(ev: any) {
    
    // if (ev.detail.value === "todos"){
    //   this.publisher = '';
    //   return
    // }

    this.publisher = ev.detail.value
  }

 

}
