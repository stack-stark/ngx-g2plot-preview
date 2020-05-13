import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd';
const routes: Routes = [
  { path: '', component: BarComponent }
];

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NzButtonModule
  ]
})
export class BarModule { }
