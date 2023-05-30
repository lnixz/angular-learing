import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '@share/share.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';

const routers: Routes = [
  {
    path: '',
    component: MaterialComponent,
  },
];

@NgModule({
  declarations: [MaterialComponent],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routers)],
})
export class MaterialModule {}
