import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public customFormatter(value: number) {
    return `${value}%`
  }

  valorObtenido:number

  //Este será el valor tomado por el progress bar y dependerá de la barra del range
  valorProgress:number

  obtener(event:any){
    this.valorObtenido = event.detail.value
    this.valorProgress = this.valorObtenido/100
    console.log(this.valorObtenido)
  }

  obtenerDual(event:any){
    console.log(event.detail.value) //Permite obtener tanto el valor máximo del rango como el valor mínimo
  }

}
