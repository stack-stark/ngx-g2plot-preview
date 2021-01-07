import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCloudComponent } from './word-cloud.component';
import { G2plotWordCloudModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const routes: Routes = [
  { path: '', component: WordCloudComponent }
];

@NgModule({
  declarations: [WordCloudComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotWordCloudModule,
    NzSpinModule
  ]
})
export class WordCloudModule { }
