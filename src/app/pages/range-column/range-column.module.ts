import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeColumnComponent } from './range-column.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RangeColumnComponent }
];


@NgModule({
  declarations: [RangeColumnComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RangeColumnModule { }
