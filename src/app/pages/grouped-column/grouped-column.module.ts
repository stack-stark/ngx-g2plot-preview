import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedColumnComponent } from './grouped-column.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GroupedColumnComponent }
];



@NgModule({
  declarations: [GroupedColumnComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class GroupedColumnModule { }
