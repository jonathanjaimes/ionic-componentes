import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; //Esto reemplaza la utilización del evento en la función loadData()

  constructor() { }
  
  data:any[] = Array(20);

  ngOnInit() {
  }

  loadData(){
    console.log(this.infiniteScroll)



    setTimeout(()=> {

      const nuevoArray = Array(20); //Aquí vamos trayendo los registros
      this.data.push(...nuevoArray)

      if (this.data.length > 30) { //Ponemos treinta para que solo muestre cuarenta eleemntos, o sea solo haga un solo push
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return
      }



      this.infiniteScroll.complete(); //permite que deje de mostrar el cargando un segundo y medio después de aparecer
    }, 1500)

  }

}
