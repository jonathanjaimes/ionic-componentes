import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IAlbum } from '../../interfaces/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private servicio:DataService) { }

  albumes:IAlbum[] = [];

  textoBuscar:string = '';

  ngOnInit() {

    this.traer()
  }

  buscar(e:any){
    this.textoBuscar = e.detail.value;
    // console.log(this.textoBuscar);
  }

  async traer(){
    try{
      this.albumes = await this.servicio.getAlbumes();

    }catch(err){
      console.log(err);
    }
  }

}
