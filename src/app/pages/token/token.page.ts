import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TokenService } from 'src/app/services/token.service';
import { TokenAuth } from 'src/app/shared/interface/token.interface';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
  public contador = 0;
  private i = 0;
  public buffer = 1;
  private limiteContador = 1;
  private subscription = new Subscription();
  $token: Observable<TokenAuth>;
  constructor(
    private tokenService: TokenService,
    private notificacionService: NotificacionesService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.$token = this.tokenService.obtener();
    this.subscription.add(
    interval(1000)
    .pipe(
      tap(value => {
        this.i = this.i + 1;
        this.contador = (this.i / 100);
        // console.log(this.i);
        if (this.contador >= this.limiteContador) {
          this.contador = 0;
          this.i = 0;
          this.$token = this.tokenService.obtener();
        }
      })
    )
    .subscribe(data => {}));
    /*.pipe(
      // flatMap(() => this.notificationService.getNotifications(this.token))
    )*/
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  shared(event) {
    if (event.isSuccess) {
      this.notificacionService.presentToast(`${event.content} Copiado`);
    }
  }
}
