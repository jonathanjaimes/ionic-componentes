import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor(private form:FormBuilder) { }

  ngOnInit() {
  }

  registro = this.form.group({
    nombre: [""],
    apellido: [""]
  })

  data:any = [
    {
      nombre: "Jonathan",
      apellido: "Jaimes"
    },
    {
      nombre: "Guillermo",
      apellido: "Jaimes"
    },
    {
      nombre: "Armando",
      apellido: "Jaimes"
    }
  ]

  enviar(){
    console.log(this.registro.value)
  }

  refrescar(){
    this.registro.patchValue({
      nombre: ["Hola"],
      apellido: ["Como"]
    })
  }

  verDatos(e){
    console.log(e)
    this.registro.patchValue({
      nombre: e.nombre,
      apellido: e.apellido 
    })
  }



}
