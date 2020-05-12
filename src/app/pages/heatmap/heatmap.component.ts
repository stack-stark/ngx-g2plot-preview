import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.less']
})
export class HeatmapComponent implements OnInit {

  constructor() { }

  data = [
    { name: 'hot dog', value: 70, country: 'AD' },
    { name: 'burger', value: 54, country: 'AD' },
    { name: 'sandwich', value: 49, country: 'AD' },
    { name: 'kebab', value: 4, country: 'AD' },
    { name: 'fries', value: 11, country: 'AD' },
    { name: 'donut', value: 68, country: 'AD' },
    { name: 'junk', value: 49, country: 'AD' },
    { name: 'sushi', value: 47, country: 'AD' },
    { name: 'ramen', value: 64, country: 'AD' },
    { name: 'curry', value: 51, country: 'AD' },
    { name: 'udon', value: 6, country: 'AD' },
    { name: 'hot dog', value: 3, country: 'AI' },
    { name: 'burger', value: 6, country: 'AI' },
    { name: 'sandwich', value: 34, country: 'AI' },
    { name: 'kebab', value: 72, country: 'AI' },
    { name: 'fries', value: 21, country: 'AI' },
    { name: 'donut', value: 30, country: 'AI' },
    { name: 'junk', value: 99, country: 'AI' },
    { name: 'sushi', value: 40, country: 'AI' },
    { name: 'ramen', value: 1, country: 'AI' },
    { name: 'curry', value: 70, country: 'AI' },
    { name: 'udon', value: 58, country: 'AI' },
    { name: 'hot dog', value: 83, country: 'AO' },
    { name: 'burger', value: 6, country: 'AO' },
    { name: 'sandwich', value: 17, country: 'AO' },
    { name: 'kebab', value: 40, country: 'AO' },
    { name: 'fries', value: 61, country: 'AO' },
    { name: 'donut', value: 72, country: 'AO' },
    { name: 'junk', value: 61, country: 'AO' },
    { name: 'sushi', value: 50, country: 'AO' },
    { name: 'ramen', value: 77, country: 'AO' },
    { name: 'curry', value: 97, country: 'AO' },
    { name: 'udon', value: 17, country: 'AO' },
    { name: 'hot dog', value: 15, country: 'AQ' },
    { name: 'burger', value: 34, country: 'AQ' },
    { name: 'sandwich', value: 26, country: 'AQ' },
    { name: 'kebab', value: 80, country: 'AQ' },
    { name: 'fries', value: 100, country: 'AQ' },
    { name: 'donut', value: 97, country: 'AQ' },
    { name: 'junk', value: 34, country: 'AQ' },
    { name: 'sushi', value: 81, country: 'AQ' },
    { name: 'ramen', value: 25, country: 'AQ' },
    { name: 'curry', value: 100, country: 'AQ' },
    { name: 'udon', value: 56, country: 'AQ' },
  ];

  options = {
    title: {
      visible: true,
      text: '热力图',
    },
    data: this.data,
    xField: 'name',
    yField: 'country',
    colorField: 'value',
    sizeField: 'value',
    color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
  };

  codes = {
    codeTs: {
      title: `heatmap.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-heatmap',
        templateUrl: './heatmap.component.html',
        styleUrls: ['./heatmap.component.less']
      })
      export class HeatmapComponent implements OnInit {
      
        constructor() { }
      
        data = [
          { name: 'hot dog', value: 70, country: 'AD' },
          { name: 'burger', value: 54, country: 'AD' },
          { name: 'sandwich', value: 49, country: 'AD' },
          { name: 'kebab', value: 4, country: 'AD' },
          { name: 'fries', value: 11, country: 'AD' },
          { name: 'donut', value: 68, country: 'AD' },
          { name: 'junk', value: 49, country: 'AD' },
          { name: 'sushi', value: 47, country: 'AD' },
          { name: 'ramen', value: 64, country: 'AD' },
          { name: 'curry', value: 51, country: 'AD' },
          { name: 'udon', value: 6, country: 'AD' },
          { name: 'hot dog', value: 3, country: 'AI' },
          { name: 'burger', value: 6, country: 'AI' },
          { name: 'sandwich', value: 34, country: 'AI' },
          { name: 'kebab', value: 72, country: 'AI' },
          { name: 'fries', value: 21, country: 'AI' },
          { name: 'donut', value: 30, country: 'AI' },
          { name: 'junk', value: 99, country: 'AI' },
          { name: 'sushi', value: 40, country: 'AI' },
          { name: 'ramen', value: 1, country: 'AI' },
          { name: 'curry', value: 70, country: 'AI' },
          { name: 'udon', value: 58, country: 'AI' },
          { name: 'hot dog', value: 83, country: 'AO' },
          { name: 'burger', value: 6, country: 'AO' },
          { name: 'sandwich', value: 17, country: 'AO' },
          { name: 'kebab', value: 40, country: 'AO' },
          { name: 'fries', value: 61, country: 'AO' },
          { name: 'donut', value: 72, country: 'AO' },
          { name: 'junk', value: 61, country: 'AO' },
          { name: 'sushi', value: 50, country: 'AO' },
          { name: 'ramen', value: 77, country: 'AO' },
          { name: 'curry', value: 97, country: 'AO' },
          { name: 'udon', value: 17, country: 'AO' },
          { name: 'hot dog', value: 15, country: 'AQ' },
          { name: 'burger', value: 34, country: 'AQ' },
          { name: 'sandwich', value: 26, country: 'AQ' },
          { name: 'kebab', value: 80, country: 'AQ' },
          { name: 'fries', value: 100, country: 'AQ' },
          { name: 'donut', value: 97, country: 'AQ' },
          { name: 'junk', value: 34, country: 'AQ' },
          { name: 'sushi', value: 81, country: 'AQ' },
          { name: 'ramen', value: 25, country: 'AQ' },
          { name: 'curry', value: 100, country: 'AQ' },
          { name: 'udon', value: 56, country: 'AQ' },
        ];
      
        options = {
          title: {
            visible: true,
            text: '热力图',
          },
          data: this.data,
          xField: 'name',
          yField: 'country',
          colorField: 'value',
          sizeField: 'value',
          //size: [10,40],
          color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
        };
      }
      `,
    },
    codeHtml: {
      title: `heatmap.component.html`,
      code: `<div starkG2plotHeatmap [options]="options" style="width: 500px;"></div>`,
    },
  };

  ngOnInit(): void {
  }

}
