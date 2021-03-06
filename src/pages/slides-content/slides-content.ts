import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage, Content, Slides, Refresher } from 'ionic-angular';
import { HttpService } from '@ngapp/core';
import { Tween, easeOut } from './../../animate/process';

@IonicPage()
@Component({
  selector: 'page-slides-content',
  templateUrl: 'slides-content.html',
})
export class SlidesContentPage {

  tabList: Array<any> = [
    { name: '列表一' }, { name: '列表二' }, { name: '列表三' }, { name: '列表四' },
    { name: '列表五' }, { name: '列表六' }, { name: '列表七' }, { name: '列表八' },
    { name: '列表九' }, { name: '列表十' },
  ]

  tabIndex: number = 0;
  pageNumber: number = 0;
  infiniteState: boolean = false;
  list: Array<any> = [];
  tabArray;

  screenWidth: number;
  translateX: number = 0;
  tween: Tween;
  easeOut: Function = easeOut;

  @ViewChild(Content) content: Content;
  @ViewChild('slides') slides: Slides;
  @ViewChild('tabBox') tabBox: ElementRef;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
  ) {
  }

  ionViewDidLoad() {
    this.getList();
    this.tabArray = this.tabBox.nativeElement.querySelectorAll('li');
    this.screenWidth = document.documentElement.clientWidth;
  }

  getList() {
    this.pageNumber++;
    this.http.httpPost("constructionHomeMaterials/materialsPage", { longitude: 118.796623, latitude: 32.059352, pageNumber: this.pageNumber })
      .subscribe(result => {
        let list = result.data.list;
        if (this.pageNumber == 1) {
          this.list = list;
        } else {
          this.list = this.list.concat(list);
        }
        this.infiniteState = result.data.lastPage ? false : true;
      }, this.http.errorHandler);
  }

  /**滑动切换 */
  slideChanged() {
    let index = this.slides.getActiveIndex();
    if (index > this.tabList.length - 1) {
      return;
    }
    this.tabIndex = this.slides.getActiveIndex();
    this.resetTab();
    this.resetList();
  }

  /**切换导航 */
  cutTabs(index) {
    this.tabIndex = index;
    this.slides.slideTo(index, 0);
    // this.resetTab();
  }

  /**重置列表 */
  resetList() {
    this.pageNumber = 0;
    this.content.scrollToTop();
    this.getList();
  }

  resetTab() {
    let ele = this.tabBox.nativeElement;
    let parent = ele.offsetParent;

    let scrollLeft = parent.scrollLeft;
    let left = this.tabIndex * 75 - scrollLeft;
    let right = this.screenWidth - ((this.tabIndex + 1) * 75 - scrollLeft);

    if (right <= 75) {
      // parent.scrollLeft = (this.tabIndex + 2) * 75 - this.screenWidth;
      let endP = (this.tabIndex + 2) * 75 - this.screenWidth;
      this.slideScrollThree(1, parent, endP);
    }
    if (left <= 75) {
      // parent.scrollLeft = (this.tabIndex - 1) * 75;
      let endP = (this.tabIndex - 1) * 75;
      this.slideScrollThree(-1, parent, endP);
    }
  }

  // 只需要控制起始和结束位置
  slideScrollThree(type, target, end) {
    console.log("初始信息", 0, target.scrollLeft, end, 50);
    let t = 0;
    let b = target.scrollLeft;
    let c = end - target.scrollLeft;
    let d = 30;

    let timer = setInterval(() => {
      target.scrollLeft = Math.ceil(this.easeOut(type, t, b, c, d));
      t++;
      if (type > 0) {
        if (t >= d || target.scrollLeft >= end) {
          target.scrollLeft = end;
          clearInterval(timer);
        }
      } else {
        if (t >= d || target.scrollLeft <= end) {
          target.scrollLeft = end;
          clearInterval(timer);
        }
      }
    }, 10);
  }

  run(target, t, b, c, d) {
    target.scrollLeft = Math.ceil(this.easeOut(t, b, c, d));
    console.log(t, Math.ceil(this.easeOut(t, b, c, d)), target.scrollLeft);
    if (t < d) {
      t++;
      setTimeout(this.run(target, t, b, c, d), 10);
    }
  }

  slideScrollTwo(type, target, distance) {
    let left = target.scrollLeft;
    let num = 0; //计算次数
    let offset = 0;//增减幅度
    let all = 0;
    let timer = setInterval(() => {
      num++;
      offset = offset + type;
      left = left + offset;
      target.scrollLeft = left;
      all = all + offset;
      if (num >= 15) {
        target.scrollLeft = distance
        clearInterval(timer);
      }
    }, 5)
  }

  /**滑动效果一 */
  slideScroll(target, scrollLeft, width, check) {
    let num = width / 30;
    let left = scrollLeft;
    let timer = setInterval(() => {
      left = left + num;
      target.scrollLeft = left;
      if (width > 0) {
        if (target.scrollLeft >= check) {
          target.scrollLeft = width + 75;
          clearInterval(timer);
        }
      } else {
        if (target.scrollLeft <= check) {
          target.scrollLeft = check;
          clearInterval(timer);
        }
      }
    }, 10);
  }

  /**
  * @param refresher 下拉刷新
  */
  doRefresh(refresher) {
    this.pageNumber = 0;
    setTimeout(() => refresher.complete(), 1000);
    this.getList();
  }
  /**
   * 上拉
   */
  doInfinite(infiniteScroll) {
    setTimeout(() => infiniteScroll.complete(), 1000);
    this.getList();
  }

}
