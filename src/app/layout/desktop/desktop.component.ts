import { Component, OnInit } from '@angular/core';
import { menuList } from './menu';
import { Menu } from './menu.interface';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.less']
})
export class DesktopComponent implements OnInit {

  constructor() { }
  isCollapsed = false;
  menuList = menuList;

  ngOnInit(): void {
  }

  trackByItems(index: number, item: Menu): string { return item.name; }
}
