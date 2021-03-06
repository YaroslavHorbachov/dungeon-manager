import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIComponentsModule } from '@dungeon-manager/ui-components';
import { DashboardComponent } from './components';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

@NgModule({
  imports: [CommonModule, UIComponentsModule, FeatureDashboardRoutingModule],
  declarations: [DashboardComponent],
})
export class FeatureDashboardModule {}
