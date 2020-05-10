import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLineComponent } from './step-line.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StepLineComponent }
];

@NgModule({
  declarations: [StepLineComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StepLineModule { }
