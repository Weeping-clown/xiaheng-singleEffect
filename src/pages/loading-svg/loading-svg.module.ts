import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingSvgPage } from './loading-svg';

@NgModule({
    declarations: [
        LoadingSvgPage,
    ],
    imports: [
        IonicPageModule.forChild(LoadingSvgPage),
    ],
})
export class LoadingSvgPageModule { }