import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'ionic',
    loadChildren: () =>
      import('./ionic/ionic.module').then((m) => m.IonicModule),
  },
  {
    path: 'material',
    loadChildren: () =>
      import('./material/material.module').then((m) => m.MaterialModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
