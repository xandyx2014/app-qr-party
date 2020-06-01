import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitacionesPageRoutingModule } from './invitaciones-routing.module';

import { InvitacionesPage } from './invitaciones.page';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClipboardModule,
    InvitacionesPageRoutingModule
  ],
  declarations: [InvitacionesPage]
})
export class InvitacionesPageModule {}
