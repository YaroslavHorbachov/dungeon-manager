import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataAccessCharacterModule } from '@dungeon-manager/data-access-character';
import { UIComponentsModule } from '@dungeon-manager/ui-components';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CharacterComponent, CharactersComponent } from './components';
import { FeatureCharactersRoutingModule } from './feature-characters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureCharactersRoutingModule,
    UIComponentsModule,
    NzCardModule,
    NzLayoutModule,
    DataAccessCharacterModule,
  ],
  declarations: [CharacterComponent, CharactersComponent],
})
export class FeatureCharactersModule {}
