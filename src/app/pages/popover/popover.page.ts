import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }



  ngOnInit() {
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false //para impedir que se cierre el popover al dar clic fuera de el
    });
    await popover.present();

    const {data} = await popover.onWillDismiss() //aquí recibimos la data que se manda desde el hijo (lista popover)
    console.log(data)
  }

}
