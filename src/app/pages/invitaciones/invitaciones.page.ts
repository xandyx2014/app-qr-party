import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InvitacionesService } from 'src/app/services/invitaciones.service';
import { Observable } from 'rxjs';
import { Invitacion } from 'src/app/shared/interface/invitacion.interface';
import { take, filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-invitaciones',
  templateUrl: './invitaciones.page.html',
  styleUrls: ['./invitaciones.page.scss'],
})
export class InvitacionesPage implements OnInit {
  items = [, , , , , , , , , , , , , ];
  $invitacion: Observable<Invitacion[]>;
  constructor(
    private notificacionService: NotificacionesService,
    public actionSheetController: ActionSheetController,
    private invitacionService: InvitacionesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.obtenerInvitaciones();
  }
  obtenerInvitaciones() {
    this.$invitacion = this.invitacionService.obtener().pipe(
      map(item => item.filter(value => value.deletedAt === null))
    );
  }
  shared(event) {
    if (event.isSuccess) {
      this.notificacionService.presentToast(`${event.content} Copiado`);
    }
  }
  async presentActionSheet(item: Invitacion) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      mode: 'md',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.invitacionService.borrar(item.id)
          .pipe(
            take(1)
          )
          .subscribe( resp => {
            this.obtenerInvitaciones();
            this.notificacionService.presentToast('Borrado correctamente');
          });
        }
      }, {
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
          console.log('Share clicked');
          this.router.navigate(['/formulario'], {queryParams: {...item}});
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
