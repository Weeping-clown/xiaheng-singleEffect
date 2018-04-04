import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageLoadingPage } from './image-loading';
import { ComponentsModule } from './../../components';

@NgModule({
    declarations: [
        ImageLoadingPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ImageLoadingPage),
    ],
})
export class ImageLoadingPageModule { }