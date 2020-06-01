import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  codigo = '';
  fechaMinima = new Date();
  constructor() { }

  ngOnInit() {
  }

}
