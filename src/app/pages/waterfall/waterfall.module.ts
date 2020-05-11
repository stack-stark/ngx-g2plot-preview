import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterfallComponent } from './waterfall.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: WaterfallComponent }
];

@NgModule({
  declarations: [WaterfallComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class WaterfallModule { }
