import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoadingImagesComponent } from './loading-images/loading-images';

@NgModule({
    imports: [
        IonicModule   //不加会出现模板错误
    ],
    declarations: [
        LoadingImagesComponent
    ],
    providers: [
        // LoadingImagesComponent
    ],
    entryComponents: [
        LoadingImagesComponent
    ],
    exports: [
        LoadingImagesComponent
    ]
})

export class ComponentsModule { }