import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InvitacionesService } from 'src/app/services/invitaciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { format } from 'date-fns';
import { Invitacion } from 'src/app/shared/interface/invitacion.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  codigo = '';
  fechaMinima = new Date();
  myForm: FormGroup;
  invitacion = new Subscription();
  toDay = format(new Date(), 'yyyy-MM-dd');
  editar = false;
  datosEditar: Invitacion;
  constructor(
    private fb: FormBuilder,
    private invitacionService: InvitacionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificacionService: NotificacionesService
  ) { }

  ngOnInit() {
    console.log(this.toDay);
    this.activatedRoute.queryParams.subscribe( (resp: Invitacion) => {
      if (Object.keys(resp).length) {
        this.editar = true;
        const codigo  = resp.codigo.split('-')[0];
        console.log(codigo);
        this.datosEditar = {...resp, codigo};
      }
      // console.log(resp);
      this.crearFormulario();
    });
  }
  ionViewWillLeave() {
    this.invitacion.unsubscribe();
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      fechaLimite: [this.datosEditar?.fechaLimite ?? '', Validators.required],
      asunto: [this.datosEditar?.asunto ?? '', Validators.required],
      codigo: [this.datosEditar?.codigo ?? '', Validators.required],
      limite: [this.datosEditar?.limite ?? 1, [Validators.required, Validators.min(1)]]
    });

  }
  async crear() {
    const codigo = this.myForm.value.codigo as string;
    const codigoForm = codigo.toUpperCase();
    const loading = await this.notificacionService.presentLoading();
    this.invitacion.add(
      this.invitacionService.crear({...this.myForm.value, codigo: codigoForm}).subscribe(async  (resp ) => {
        console.log(resp);
        await loading.dismiss();
        await this.router.navigate(['/invitaciones']);
        await this.notificacionService.presentToast('Invitacion creada Correctamente');
      },
      async (err) => {
        await loading.dismiss();
        await this.notificacionService.presentAlert(
          'Notificacion',
          'error inesperado',
          err.message
        );
        await this.router.navigate(['/invitaciones']);
      }
      )
    );
    // console.log(this.myForm.value);
  }
  async actualizar() {
    const codigo = this.myForm.value.codigo as string;
    const codigoForm = codigo.toUpperCase();
    const loading = await this.notificacionService.presentLoading();
    this.invitacion.add(
      this.invitacionService.actualizar(this.datosEditar.id, {...this.myForm.value, codigo: codigoForm}).subscribe(async  (resp ) => {
        console.log(resp);
        await loading.dismiss();
        await this.router.navigate(['/invitaciones']);
        await this.notificacionService.presentToast('Invitacion actualizada Correctamente');
      },
      async (err) => {
        await loading.dismiss();
        await this.notificacionService.presentAlert(
          'Notificacion',
          'error inesperado',
          err.message
        );
        await this.router.navigate(['/invitaciones']);
      }
      )
    );
  }

}
