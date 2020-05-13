import { Component, ViewChild } from '@angular/core';
import { G2plotLineDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.less']
})
export class LineComponent {

  constructor() { }
  @ViewChild('divG2plotLine') divG2plotLine: G2plotLineDirective;

  data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  options = {
    title: {
      visible: true,
      text: '折线图',
    },
    description: {
      visible: true,
      text: '用平滑的曲线代替折线。',
    },
    data: this.data,
    xField: 'year',
    yField: 'value',
  };

  codes = {
    codeTs: {
      title: `line.component.ts`,
      code: `import { Component, ViewChild } from '@angular/core';
      import { G2plotLineDirective } from 'ngx-g2plot';

      @Component({
        selector: 'app-line',
        templateUrl: './line.component.html',
        styleUrls: ['./line.component.less']
      })
      export class LineComponent {

        constructor() { }
        @ViewChild('divG2plotLine') divG2plotLine: G2plotLineDirective;

        data = [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ];

        options = {
          title: {
            visible: true,
            text: '折线图',
          },
          description: {
            visible: true,
            text: '用平滑的曲线代替折线。',
          },
          data: this.data,
          xField: 'year',
          yField: 'value',
        };

        updateConfig(): void {
         const options = {
            title: {
              visible: true,
              text: 'The line chart',
            },
            description: {
              visible: true,
              text: 'Replace broken lines with smooth curves.',
            },
            xField: 'year',
            yField: 'value',
          };
         this.divG2plotLine.instance.updateConfig(options); // 使用当前实例方法 Use the current instance method
         this.divG2plotLine.instance.render(); // 使用当前实例方法 Use the current instance method
        }

        changeData(): void {
          const data = [
            { year: '1991', value: 13 },
            { year: '1992', value: 14 },
            { year: '1993', value: 13.5 },
            { year: '1994', value: 15 },
            { year: '1995', value: 14.9 },
            { year: '1996', value: 16 },
            { year: '1997', value: 17 },
            { year: '1998', value: 19 },
            { year: '1999', value: 23 },
          ];
          this.divG2plotLine.changeData(data);
        }

        repaint(): void {
          this.divG2plotLine.repaint();
        }

        destroy(): void {
          this.divG2plotLine.destroy();
        }

      }
      `,
    },
    codeHtml: {
      title: `line.component.html`,
      code: `<div starkG2plotLine #divG2plotLine="g2plotLine" [options]="options" style="width: 500px;"></div>`,
    },
  };

  updateConfig(): void {
   const options = {
      title: {
        visible: true,
        text: 'The line chart',
      },
      description: {
        visible: true,
        text: 'Replace broken lines with smooth curves.',
      },
      xField: 'year',
      yField: 'value',
    };
   this.divG2plotLine.instance.updateConfig(options); // 使用当前实例方法 Use the current instance method
   this.divG2plotLine.instance.render(); // 使用当前实例方法 Use the current instance method
  }

  changeData(): void {
    const data = [
      { year: '1991', value: 13 },
      { year: '1992', value: 14 },
      { year: '1993', value: 13.5 },
      { year: '1994', value: 15 },
      { year: '1995', value: 14.9 },
      { year: '1996', value: 16 },
      { year: '1997', value: 17 },
      { year: '1998', value: 19 },
      { year: '1999', value: 23 },
    ];
    this.divG2plotLine.changeData(data);
  }

  repaint(): void {
    this.divG2plotLine.repaint();
  }

  destroy(): void {
    this.divG2plotLine.destroy();
  }


}
