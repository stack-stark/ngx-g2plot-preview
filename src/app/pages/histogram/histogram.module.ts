import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistogramComponent } from './histogram.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HistogramComponent }
];

@NgModule({
  declarations: [HistogramComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class HistogramModule { }
