import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { imageShow } from './../../animate/images';

/**
 */
@Component({
  selector: 'loading-images',
  templateUrl: 'loading-images.html',
  animations: [imageShow]
})
export class LoadingImagesComponent {

  state: string = 'start';
  loaded: boolean = false;

  @Input() pic: string = '';
  @ViewChild('img') img: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.imgLoad();
  }

  /**直接dome */
  imgLoad() {
    this.img.nativeElement.onload = () => {
      this.state = 'end';
      this.loaded = true;
    }
  }

  /**complete判断 */
  imgComplete() {
    let timer = setInterval(() => {
      if (this.img.nativeElement.complete) {
        this.state = 'end';
        clearInterval(timer);
      }
    }, 50);
  }

  /**onload触发---无效 */
  checkState() {
    this.state = 'end';
  }

}
