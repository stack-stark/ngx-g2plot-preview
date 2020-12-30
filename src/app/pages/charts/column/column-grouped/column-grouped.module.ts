import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnGroupedComponent } from './column-grouped.component';
import { G2plotColumnModule } from 'ngx-g2plot';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const routes: Routes = [
  { path: '', component: ColumnGroupedComponent }
];
@NgModule({
  declarations: [ColumnGroupedComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotColumnModule,
    NzTabsModule
  ]
})
export class ColumnGroupedModule { }
