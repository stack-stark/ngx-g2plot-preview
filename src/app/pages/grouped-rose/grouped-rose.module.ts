import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedRoseComponent } from './grouped-rose.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GroupedRoseComponent }
];


@NgModule({
  declarations: [GroupedRoseComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class GroupedRoseModule { }
