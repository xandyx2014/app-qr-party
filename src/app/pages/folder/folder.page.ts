import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuController.enable(true);
  }

}
