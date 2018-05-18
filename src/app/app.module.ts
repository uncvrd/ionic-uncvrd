import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPageModule } from '../pages/tabs/tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { MusicPageModule } from '../pages/music/music.module';
import { SubmitPageModule } from '../pages/submit/submit.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    TabsPageModule,
    HomePageModule,
    MusicPageModule,
    SubmitPageModule,
    ProfilePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
