import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { MusicPage } from './music';

@NgModule({
  declarations: [
    MusicPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicPage),
  ],
})
export class MusicPageModule {
  constructor(){

  }
}
