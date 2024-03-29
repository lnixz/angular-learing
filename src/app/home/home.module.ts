import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { ShareModule } from '@share/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
];



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
