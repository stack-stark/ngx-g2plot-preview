import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2plotAreaModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: AreaComponent }
];


@NgModule({
  declarations: [AreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    G2plotAreaModule
  ]
})
export class AreaModule { }
