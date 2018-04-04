import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesContentPage } from './slides-content';
import { ComponentsModule } from './../../components';

@NgModule({
    declarations: [
        SlidesContentPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(SlidesContentPage),
    ],
})
export class SlidesContentPageModule { }