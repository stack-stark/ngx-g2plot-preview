import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd';

const routes: Routes = [
  { path: '', component: LineComponent }
];

@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NzButtonModule
  ]
})
export class LineModule { }
