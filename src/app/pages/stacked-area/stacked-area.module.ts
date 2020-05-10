import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedAreaComponent } from './stacked-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StackedAreaComponent }
];


@NgModule({
  declarations: [StackedAreaComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StackedAreaModule { }
