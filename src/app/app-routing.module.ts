import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'home', 
    loadChildren: () => import('./moduls/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'panel', 
    loadChildren: () => import('./moduls/panel/panel.module').then(m => m.PanelModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('./moduls/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




//ng g module home --routing//
//ng g c home //