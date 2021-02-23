import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionPageRoutingModule } from './validacion-routing.module';

import { ValidacionPage } from './validacion.page';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ValidacionPageRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [ValidacionPage]
})
export class ValidacionPageModule {}
