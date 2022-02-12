import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/imenu';
import { Usuario } from '../interfaces/iusuario';
import { IAlbum } from '../interfaces/album';
import { ISuperheroe } from '../interfaces/isuperheroe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').toPromise()
  }

  getMenuOpciones(){
    return this.http.get<Componente[]>('/assets/data/menu-opciones.json')
  }

  getAlbumes(){
    return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums').toPromise()
  }

  getSuperHeroes(){
    return this.http.get<ISuperheroe[]>('/assets/data/superheroes.json')
  }

}
