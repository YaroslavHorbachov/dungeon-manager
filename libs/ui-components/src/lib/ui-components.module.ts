import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AppstoreOutline, BookOutline, UserOutline
} from '@ant-design/icons-angular/icons';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NavigationComponent } from './navigation/navigation.component';

registerLocaleData(en);

const icons = [
  AppstoreOutline,
  UserOutline,
  BookOutline,
];

const modules = [NzDrawerModule, NzMenuModule, NzIconModule.forChild(icons), NzCardModule];
const components = [NavigationComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ...modules],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  declarations: components,
  exports: components,
})
export class UiComponentsModule {}
