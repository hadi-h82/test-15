import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsLearning01Component } from './rxjs-learning01/rxjs-learning01.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: '',
  //   component: RxjsLearningComponent
  // },
  {
    path: '',
    component: RxjsLearning01Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
