import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponentsModule } from '@dungeon-manager/ui-components';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FeatureCharactersRoutingModule } from './feature-characters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureCharactersRoutingModule,
    UiComponentsModule,
    NzCardModule,
  ],
  declarations: [CharacterComponent, CharactersComponent],
})
export class FeatureCharactersModule {}
