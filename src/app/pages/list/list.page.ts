import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Usuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private servicio:DataService) { }

  @ViewChild(IonList) ionList:IonList; //vamos a hacer que se cierre el menú justo cuando damos click en una de sus opciones

  usuarios:Usuario[] = []

  ngOnInit() {

    this.servicio.getUsuarios().then((resp:any) => {
      this.usuarios = resp
      console.log(this.usuarios)
    }).catch((err:any)=> {
      console.log("hay error")
    })

  }

  // async obtener(){
  //   try {

  //     this.usuarios = await this.servicio.getUsuarios()

  //   } catch(error){
  //     console.log(error)
  //   }
  // }

  disparar(user:any){
    console.log(user)
    this.ionList.closeSlidingItems(); //Esta función permite cerrar el menú deslizante
  }

}
