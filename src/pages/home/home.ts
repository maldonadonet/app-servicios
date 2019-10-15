import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicehomePage } from '../index.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    iniciar () {
        this.navCtrl.push( ServicehomePage );
    }

}
