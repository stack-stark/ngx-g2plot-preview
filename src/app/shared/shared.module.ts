/*
 * @Description:
 * @Date: 2020-05-12 17:33:54
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-03 15:13:18
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotAreaModule } from 'ngx-g2plot';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CodeShowComponent } from './components/code-show/code-show.component';
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [CodeShowComponent],
  imports: [
    CommonModule,
    G2plotAreaModule,
    NzGridModule,
    HighlightModule,
    NzTabsModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  exports: [
    NzGridModule,
    HighlightModule,
    CodeShowComponent
  ]
})
export class SharedModule { }
