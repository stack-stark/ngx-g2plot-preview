import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoseComponent } from './rose.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RoseComponent }
];



@NgModule({
  declarations: [RoseComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RoseModule { }
