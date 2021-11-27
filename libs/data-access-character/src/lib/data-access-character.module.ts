import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCharacters from './state/characters.reducer';
import { CharactersEffects } from './state/characters.effects';
import { CharactersFacade } from './state/characters.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCharacters.CHARACTERS_FEATURE_KEY, fromCharacters.reducer),
    EffectsModule.forFeature([CharactersEffects]),
  ],
  providers: [CharactersFacade],
})
export class DataAccessCharacterModule {}
