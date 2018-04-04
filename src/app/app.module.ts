import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppCoreModule, ReducersModule } from '@ngapp/core';

import { ComponentsModule } from './../components/component.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      iconMode:'ios',
      tabsHideOnSubPages:true,
    }),
    AppCoreModule.config({
      BASE_API: '/api/',
      // BASE_DOMAIN: 'http://192.168.2.158:9999/yiZuJiXie',//王武
      // BASE_DOMAIN: 'http://192.168.2.123:8090/yiZuJiXie',//李强
      // BASE_DOMAIN: 'http://192.168.2.171:8080/yiZuJiXie',//张思俶
      BASE_DOMAIN: 'http://yizujixie.com55.cn',
      HTTP_DEBUG: false,
      EXTRA_HEARDE: false,
      TOKEN_NAME: 'token',
    }),
    ReducersModule.rootReducer(),
    ComponentsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
