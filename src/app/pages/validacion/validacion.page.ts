import { Component, OnInit } from '@angular/core';
import { ValidacionService } from 'src/app/services/validacion.service';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage implements OnInit {

  constructor(
    private validacionService: ValidacionService
  ) { }

  ngOnInit() {
  }
  validar() {
    this.validacionService.validar();
  }
  resolved(event) {}
}
