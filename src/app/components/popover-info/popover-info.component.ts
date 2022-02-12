import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {


  lista:string[] = Array(10)

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  itemElegido(elemento:number){
    this.popoverController.dismiss({
      seleccionado: elemento //Aquí le mandamos al padre el elemento que se seleccionó en la lista popover
    })
  }

}
