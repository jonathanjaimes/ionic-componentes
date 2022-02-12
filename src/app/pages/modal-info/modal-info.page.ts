import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  //Aquí estamos recibiendo las propiedades enviadas por el padre al hijo (el hijo es el modal info)
  @Input() nombre:string;
  @Input() apellido:string;


  ngOnInit() {
  }



  salirSinArgumentos(){
    this.modalController.dismiss()
  }

  salirConArgumentos(){
    this.modalController.dismiss({
      nombre: "Felipe",
      cargo: "Gerente"
    }) //Como argumento del dismiss enviaremos todo lo que queramos al padre
  }

}
