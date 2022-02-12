import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  lista:string[] = []

  ngOnInit() {
  }

  doRefresh(event) {

    setTimeout(() => {
      this.lista = Array(30)
      event.target.complete() //Permite terminar la carga
    }, 1500);
  }

}
