import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxG2plotModule } from 'ngx-g2plot';
import { NzGridModule, NzTabsModule } from 'ng-zorro-antd';
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
    NgxG2plotModule,
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
    NgxG2plotModule,
    NzGridModule,
    HighlightModule,
    CodeShowComponent
  ]
})
export class SharedModule { }
