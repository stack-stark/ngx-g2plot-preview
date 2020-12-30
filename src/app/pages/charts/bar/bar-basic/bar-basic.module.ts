import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarBasicComponent } from './bar-basic.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotBarModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: BarBasicComponent }
];

@NgModule({
  declarations: [BarBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotBarModule,
    NzTabsModule
  ]
})
export class BarBasicModule { }
