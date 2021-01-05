import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletBasicComponent } from './bullet-basic.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotBulletModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: BulletBasicComponent }
];

@NgModule({
  declarations: [BulletBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotBulletModule,
    NzTabsModule
  ]
})
export class BulletBasicModule { }
