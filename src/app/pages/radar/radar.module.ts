import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarComponent } from './radar.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RadarComponent }
];


@NgModule({
  declarations: [RadarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RadarModule { }
