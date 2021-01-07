import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotBoxModule, G2plotRadialBarModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: BoxComponent }
];


@NgModule({
  declarations: [BoxComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotBoxModule
  ]
})
export class BoxModule { }
