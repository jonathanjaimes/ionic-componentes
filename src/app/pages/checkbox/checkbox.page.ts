import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  formulario = this.formBuilder.group({
    info: [''],
    check: [false]
  })

  onSubmit(){
    console.log(this.formulario.value)
  }

}
