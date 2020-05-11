import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedBarComponent } from './stacked-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StackedBarComponent }
];


@NgModule({
  declarations: [StackedBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StackedBarModule { }
