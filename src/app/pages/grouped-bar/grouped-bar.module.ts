import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedBarComponent } from './grouped-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GroupedBarComponent }
];


@NgModule({
  declarations: [GroupedBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class GroupedBarModule { }
