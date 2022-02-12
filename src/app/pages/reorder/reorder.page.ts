import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  constructor() { }

  lista:string[] = ["JOnathan", "Guillermo", "Jaimes", "Moreno"]

  bandera:boolean = true;

  ngOnInit() {
  }

  hacerToggle(){
    this.bandera = !this.bandera;
  }

  doReorder(e){

    //Esto permite mover los elementos dentro del array lista
    const itemMover = this.lista.splice(e.detail.from, 1)[0];
    this.lista.splice(e.detail.to, 0, itemMover)

    console.log(this.lista)

    e.detail.complete()
  }

}
