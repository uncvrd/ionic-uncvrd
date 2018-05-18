import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MusicPage } from '../music/music';
import { SubmitPage } from '../submit/submit';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MusicPage;
  tab3Root = SubmitPage;
  tab4Root = ProfilePage;

  constructor(public navCtrl: NavController) {
  }

}
