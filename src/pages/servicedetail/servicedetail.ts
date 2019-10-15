import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';


@IonicPage()
@Component({
  selector: 'page-servicedetail',
  templateUrl: 'servicedetail.html',
})
export class ServicedetailPage {

  servicio:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,private _sp:ServiciosProvider) {
    this.servicio =  this.navParams.get('item');
    console.log(this.servicio);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicedetailPage');
  }

}
