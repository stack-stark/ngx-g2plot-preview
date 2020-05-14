import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  LockOutline,
  UserOutline,
  FileDoneOutline,
  AreaChartOutline,
  PictureOutline,
  ScheduleOutline,
  DatabaseOutline,
  FileOutline,
  ApartmentOutline,
  SnippetsOutline,
  LineChartOutline,
  BulbOutline,
  MailOutline,
  GithubOutline,
  WechatOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  LockOutline,
  UserOutline,
  FileDoneOutline,
  AreaChartOutline,
  PictureOutline,
  ScheduleOutline,
  DatabaseOutline,
  FileOutline,
  ApartmentOutline,
  SnippetsOutline,
  LineChartOutline,
  BulbOutline,
  MailOutline,
  GithubOutline,
  WechatOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
