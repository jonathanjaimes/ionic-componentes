import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: { //Enviaremos las siguientes propiedades desde el padre
        nombre: "Jonathan",
        apellido: "Jaimes"
      }
    });
    await modal.present();

    const resp = await modal.onDidDismiss() //Aquí recibimos lo que mandamos como argumento en el dismiss del hijo

    console.log(resp)

  }

}
