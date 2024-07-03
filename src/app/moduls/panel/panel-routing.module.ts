import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
