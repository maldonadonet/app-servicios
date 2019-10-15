import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../../config/url.servicios";

@Injectable()
export class ServiciosProvider {

	servicios : any[] = [];
	servicios_cat: any[] = [];
	token = 123456789;
	

	constructor(public http: HttpClient) {
		console.log("Provider Servicios constructor");
	}


	obtener_servicios() {
		console.log("Metodo para obtener todos los servicios");
		let url = `${URL_SERVICIOS}servicios/todos`;
		console.log(url);
		this.http.get( url ).subscribe( data => {
			let data_resp = data;
	
			if(data_resp["error"]) {
				// alert
			}else {
				this.servicios = data_resp["servicios"];
				console.log(this.servicios);
			}
		});
	}

	servicios_categoria(categoria:string) {
		this.servicios = null;
		let url : any;
		console.log("Metodo para obtener todos los servicios por categoria");

		if( categoria == '*' ) {
			url = `${URL_SERVICIOS}servicios/todos`;
		}else {
			url = `${URL_SERVICIOS}servicios/services_categoria/${categoria}`;
		}
		console.log(url);

		this.http.get( url ).subscribe( data => {
			let data_resp1 = data;

			if(data_resp1["error"]) {
				// alert
			}else {
				this.servicios = data_resp1["servicios"];
				console.log(this.servicios_cat);
			}
		});
	}



	

}
