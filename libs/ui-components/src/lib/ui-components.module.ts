import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppstoreOutline, BookOutline, PlusOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ClassFeaturesComponent } from './class-features/class-features.component';
import { DescriptionsComponent } from './descriptions/descriptions.component';
import { FabComponent } from './fab/fab.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StepsComponent } from './steps/steps.component';

registerLocaleData(en);

const icons = [AppstoreOutline, UserOutline, BookOutline, PlusOutline];

const modules = [
  NzDrawerModule,
  NzMenuModule,
  NzIconModule.forChild(icons),
  NzCardModule,
  NzLayoutModule,
  NzAffixModule,
  NzButtonModule,
  NzStepsModule,
  NzDescriptionsModule,
  NzCollapseModule,
  NzListModule,
  NzTypographyModule,
  NzTableModule,
];
const components = [
  NavigationComponent,
  LayoutComponent,
  FabComponent,
  StepsComponent,
  DescriptionsComponent,
  ClassFeaturesComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ...modules],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  declarations: components,
  exports: components,
})
export class UIComponentsModule {}
