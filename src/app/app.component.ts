import { Component, OnInit } from '@angular/core';
import { Componente } from './interfaces/imenu';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private servicio:DataService) {}

  componentes:Observable<Componente[]>;

  ngOnInit(): void {
    this.componentes = this.servicio.getMenuOpciones()
  }

}
