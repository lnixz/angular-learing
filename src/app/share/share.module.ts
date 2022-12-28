import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    IonicModule,
  ],
  exports: [
    MaterialModule,
    IonicModule,
  ]
})
export class ShareModule { }
