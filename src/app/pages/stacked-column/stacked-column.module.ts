import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedColumnComponent } from './stacked-column.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StackedColumnComponent }
];


@NgModule({
  declarations: [StackedColumnComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StackedColumnModule { }
