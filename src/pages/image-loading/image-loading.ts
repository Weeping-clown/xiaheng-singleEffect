import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import { HttpService } from '@ngapp/core';

@IonicPage()
@Component({
  selector: 'page-image-loading',
  templateUrl: 'image-loading.html',
})
export class ImageLoadingPage {

  pageNumber = 0;
  list = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
  ) {
  }

  ionViewDidLoad() {
    this.getList();
  }

  getList() {
    this.pageNumber++;
    this.http.httpPost("mechanice/findMechanice", { longitude: 118.796623, latitude: 32.059352, pageNumber: this.pageNumber })
      .subscribe(result => {
        this.list = result.data.list;
      }, this.http.errorHandler);
  }

  /**
* 
* @param refresher 下拉刷新
*/
  doRefresh(refresher) {
    this.pageNumber = 0;
    setTimeout(() => {
      refresher.complete();
    }, 1000);
    this.getList();
  }
  /**
   * 上拉
   */
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
    this.getList();
  }

}
