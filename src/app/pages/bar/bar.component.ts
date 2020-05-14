import { Component,  ViewChild } from '@angular/core';
import { G2plotBarDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent {

  constructor() { }

  @ViewChild('divG2plotBar') divG2plotBar: G2plotBarDirective;

  data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  options =  {
    data: this.data,
    xField: 'sales',
    yField: 'year',
    colorField: 'year',
  };


  codes = {
    codeTs: {
      title: `bar.component.ts`,
      code: `import { Component,  ViewChild } from '@angular/core';
import { G2plotBarDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent {

  constructor() { }

  @ViewChild('divG2plotBar') divG2plotBar: G2plotBarDirective;

  data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  options =  {
    data: this.data,
    xField: 'sales',
    yField: 'year',
    colorField: 'year',
  };

  updateConfig(): void {
    const options = {
        title: {
          visible: true,
          text: 'The line chart',
        },
        xField: 'sales',
        yField: 'year',
      colorField: 'year',
      };
    // 使用当前实例方法 Use the current instance method
    this.divG2plotBar.instance.updateConfig(options);
    this.divG2plotBar.instance.render();
  }

  changeData(): void {
    const data = [
    { year: '1951 年', sales: 138 },
    { year: '1952 年', sales: 152 },
    { year: '1956 年', sales: 161 },
    { year: '1957 年', sales: 1145 },
    { year: '1958 年', sales: 148 },
    ];
    this.divG2plotBar.changeData(data);
  }

  repaint(): void {
    this.divG2plotBar.repaint();
  }

  destroy(): void {
    this.divG2plotBar.destroy();
  }
}
      `
    },
    codeHtml: {
      title: `bar.component.html`,
      code: `<div starkG2plotBar  #divG2plotBar="g2plotBar" [options]="options"></div>`
    }
  };

  updateConfig(): void {
    const options = {
       title: {
         visible: true,
         text: 'The line chart',
       },
       xField: 'sales',
        yField: 'year',
      colorField: 'year',
     };
    this.divG2plotBar.instance.updateConfig(options); // 使用当前实例方法 Use the current instance method
    this.divG2plotBar.instance.render(); // 使用当前实例方法 Use the current instance method
   }

   changeData(): void {
     const data = [
      { year: '1951 年', sales: 138 },
      { year: '1952 年', sales: 152 },
      { year: '1956 年', sales: 161 },
      { year: '1957 年', sales: 1145 },
      { year: '1958 年', sales: 148 },
     ];
     this.divG2plotBar.changeData(data);
   }

   repaint(): void {
     this.divG2plotBar.repaint();
   }

   destroy(): void {
     this.divG2plotBar.destroy();
   }
}
