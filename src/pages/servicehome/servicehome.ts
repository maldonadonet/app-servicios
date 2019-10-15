import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { ServicedetailPage } from '../servicedetail/servicedetail';



@IonicPage()
@Component({
  selector: 'page-servicehome',
  templateUrl: 'servicehome.html',
})
export class ServicehomePage {
    servicios:any[] = [];
    servicios_cat:any[] = [];
    servicedetail = ServicedetailPage;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                public serviceCtrl :  ServiciosProvider,
                public alertCtrl: AlertController) {
      this.serviceCtrl.obtener_servicios();
        
    }

    filtrar() {
      let alert = this.alertCtrl.create();
        alert.setTitle('Selecciona la categoria:');

        alert.addInput({
          type: 'radio',
          label: 'Residencial',
          value: 'residencial',
          checked: false
        });

        alert.addInput({
            type: 'radio',
            label: 'Industrial',
            value: 'industrial',
            checked: false
        });

        alert.addInput({
            type: 'radio',
            label: 'Todos',
            value: '*',
            checked: false
        });

        alert.addButton('Cancel');
        alert.addButton({
          text: 'OK',
          handler: data => {
            this.serviceCtrl.servicios_categoria(data);
            console.log(this.servicios_cat);
          }
        });
        alert.present();
      
    }


}
