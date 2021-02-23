import { Component, OnInit } from '@angular/core';
import { ValidacionService } from 'src/app/services/validacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage implements OnInit {
  myForm: FormGroup;
  constructor(
    private validacionService: ValidacionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      codigo: ['' , Validators.required],
      token: ['' , Validators.required],
      nombre: ['' , Validators.required],
      apellido: ['' , Validators.required],
      captcha: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  validar() {
    // console.log(this.myForm.value);
    this.validacionService.validar(this.myForm.value.codigo, {...this.myForm.value});
  }
  resolved(event) {}
}
