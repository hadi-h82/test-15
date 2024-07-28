import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsLearning01Component } from './rxjs-learning01/rxjs-learning01.component';


@NgModule({
  declarations: [
    HomeComponent,
    RxjsLearningComponent,
    RxjsLearning01Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
