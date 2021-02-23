import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { USER_KEY, REMEMBER_KEY } from 'src/app/shared/config.shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  remerber = false;
  username = '';
  constructor(
    private menuController: MenuController,
    private authService: AuthService,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    const rememberKey = this.localStorageService.getObject(REMEMBER_KEY);
    // console.log(rememberKey);
    if (rememberKey) {
      this.remerber =  rememberKey.remerber;
      this.username =  rememberKey.username;
    }
    // console.log(this.remerber);
    this.crearFormulario();
  }
  async ionViewWillEnter() {
    await this.menuController.enable(false);
    await this.localStorageService.removeItem(USER_KEY);
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      username: [this.username, Validators.required],
      password: ['', Validators.required],
      remerber: [this.remerber]
    });
  }
  async login() {
    console.log(this.myForm.value);
    const { username, password, remerber } = this.myForm.value;
    await this.authService.login(username, password);
    if (remerber) {
      await this.localStorageService.setObject(REMEMBER_KEY, { username, remerber });
    } else {
      await this.localStorageService.setObject(REMEMBER_KEY, { username: '', remerber: false });
    }
  }

}
