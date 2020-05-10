``` html
<stark-code-show [codes]="codes"></stark-code-show>
```

``` js
codes = {
  codeTs: {
    title: `line.component.ts`,
    code: `@Component({
  selector: 'app-stacked-column',
  templateUrl: './stacked-column.component.html',
  styleUrls: ['./stacked-column.component.less']
})`,
  },
  codeHtml: {
    title: `line.component.html`,
    code: `<div starkG2plotLine [options]="options" style="width: 500px;"></div>`,
  },
}
```