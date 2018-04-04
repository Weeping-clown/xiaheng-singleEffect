import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThirdTabPage } from './thirdTab';
import { ComponentsModule } from './../../components';

@NgModule({
    declarations: [
        ThirdTabPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ThirdTabPage),
    ],
})
export class ThirdTabPageModule { }