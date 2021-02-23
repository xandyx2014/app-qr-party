import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { InvitadosService } from 'src/app/services/invitados.service';
import { Invitados } from 'src/app/shared/interface/invitados.interface';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.page.html',
  styleUrls: ['./invitados.page.scss'],
})
export class InvitadosPage implements OnInit {
  invitados = [, , , , , , , , ];
  private activatedRouteSubscription = new Subscription();
  $invitados: Observable<Invitados>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private invitadosService: InvitadosService
  ) { }

  ngOnInit() {
    this.activatedRouteSubscription.add(
      this.activatedRoute.params.subscribe(({ id }) => {
        this.$invitados =  this.invitadosService.obtener(id);
      })
    );
  }
  ionViewWillLeave() {
    this.activatedRouteSubscription.unsubscribe();
  }

}
