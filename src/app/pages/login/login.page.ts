import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { USER_KEY } from 'src/app/shared/config.shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  constructor(
    private menuController: MenuController,
    private authService: AuthService,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }
  ionViewWillEnter() {
    this.menuController.enable(false);
    this.localStorageService.removeItem(USER_KEY);
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    console.log(this.myForm.value);
    const { username, password } = this.myForm.value;
    this.authService.login(username, password);
  }

}
