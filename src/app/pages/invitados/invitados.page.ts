import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.page.html',
  styleUrls: ['./invitados.page.scss'],
})
export class InvitadosPage implements OnInit {
  invitados = [, , , , , , , , ];
  constructor() { }

  ngOnInit() {
  }

}
