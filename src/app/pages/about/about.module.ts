import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzDividerModule, NzTypographyModule, NzTableModule } from 'ng-zorro-antd';

const routes: Routes = [
  { path: '', component: AboutComponent }
];


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NzDividerModule,
    NzTypographyModule,
    NzTableModule
  ]
})
export class AboutModule { }
