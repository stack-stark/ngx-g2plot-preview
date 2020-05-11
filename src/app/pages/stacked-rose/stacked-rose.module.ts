import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedRoseComponent } from './stacked-rose.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StackedRoseComponent }
];


@NgModule({
  declarations: [StackedRoseComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StackedRoseModule { }
