import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirmado',
  templateUrl: './confirmado.page.html',
  styleUrls: ['./confirmado.page.scss'],
})
export class ConfirmadoPage implements OnInit {
  $params: Observable<Params>;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.$params = this.activatedRoute.queryParams;
  }

}
