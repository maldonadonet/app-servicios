import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

// Http Client
import { HttpClientModule } from '@angular/common/http';

// Providers
import { UsersProvider } from '../providers/users/users';
import { ServiciosProvider } from '../providers/servicios/servicios';
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { GaleriaProvider } from '../providers/galeria/galeria';

// Páginas.
import { ContactPage, HomePage, LoginPage, OrderDetailPage, OrdersPage, RegisterPage, ServicedetailPage, ServicehomePage } from "../pages/index.page";


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    LoginPage,
    OrderDetailPage,
    OrdersPage,
    RegisterPage,
    ServicedetailPage,
    ServicehomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    LoginPage,
    OrderDetailPage,
    OrdersPage,
    RegisterPage,
    ServicedetailPage,
    ServicehomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    ServiciosProvider,
    PedidosProvider,
    GaleriaProvider
  ]
})
export class AppModule {}
