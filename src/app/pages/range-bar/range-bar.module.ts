import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeBarComponent } from './range-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RangeBarComponent }
];



@NgModule({
  declarations: [RangeBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RangeBarModule { }
