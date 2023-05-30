import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicComponent } from './ionic.component';
import { ShareModule } from '@share/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IonicComponent },
];

@NgModule({
  declarations: [
    IonicComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class IonicModule { }
