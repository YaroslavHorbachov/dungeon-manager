import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataAccessClassModule } from '@dungeon-manager/data-access-class';
import { DataAccessClassFeatureModule } from '@dungeon-manager/data-access-class-feature';
import { DataAccessRaceModule } from '@dungeon-manager/data-access-race';
import { DataAccessRaceTraitModule } from '@dungeon-manager/data-access-race-trait';
import { DataAccessStatModule } from '@dungeon-manager/data-access-stat';
import { UIComponentsModule } from '@dungeon-manager/ui-components';
import { UtilSharedModule } from '@dungeon-manager/util-shared';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import {
  BuilderAbilitiesCalculationsComponent,
  BuilderAbilitiesComponent,
  BuilderAbilitiesMethodComponent,
  BuilderAbilitiesPointBuyComponent,
  BuilderAbilitiesStandardArrayComponent,
  BuilderBasicComponent,
  BuilderClassComponent,
  BuilderClassDetailsComponent,
  BuilderClassItemComponent,
  BuilderClassSelectComponent,
  BuilderComponent,
  BuilderRaceComponent,
  BuilderRaceDetailsComponent,
  BuilderRaceItemComponent,
  BuilderRaceSelectComponent,
} from './components';
import { FeatureCharacterBuilderRoutingModule } from './feature-character-builder-routing.module';
import { BuilderEffects } from './state/builder/builder.effects';
import { BuilderFacade } from './state/builder/builder.facade';
import * as fromBuilder from './state/builder/builder.reducer';

const nzModules = [
  NzLayoutModule,
  NzFormModule,
  NzSelectModule,
  NzInputModule,
  NzButtonModule,
  NzListModule,
  NzCollapseModule,
  NzTypographyModule,
  NzDescriptionsModule,
  NzSpaceModule,
  NzGridModule,
  NzImageModule,
];
const dataAccessModules = [
  DataAccessRaceModule,
  DataAccessClassModule,
  DataAccessRaceTraitModule,
  DataAccessClassFeatureModule,
  DataAccessStatModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    StoreModule.forFeature(fromBuilder.BUILDER_FEATURE_KEY, fromBuilder.reducer),
    EffectsModule.forFeature([BuilderEffects]),
    FeatureCharacterBuilderRoutingModule,
    UIComponentsModule,
    ReactiveFormsModule,
    UtilSharedModule,
    ...dataAccessModules,
    ...nzModules,
  ],
  declarations: [
    BuilderComponent,
    BuilderAbilitiesComponent,
    BuilderBasicComponent,
    BuilderClassComponent,
    BuilderRaceComponent,
    BuilderRaceItemComponent,
    BuilderRaceSelectComponent,
    BuilderRaceDetailsComponent,
    BuilderClassDetailsComponent,
    BuilderClassSelectComponent,
    BuilderClassItemComponent,
    BuilderAbilitiesCalculationsComponent,
    BuilderAbilitiesPointBuyComponent,
    BuilderAbilitiesStandardArrayComponent,
    BuilderAbilitiesMethodComponent,
  ],
  providers: [BuilderFacade],
})
export class FeatureCharacterBuilderModule {}
