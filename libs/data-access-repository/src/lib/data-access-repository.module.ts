import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RepositoryService } from './services/repository.service';
import { RepositoryEffects } from './state/repository.effects';
import { RepositoryFacade } from './state/repository.facade';
import * as fromRepository from './state/repository.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRepository.REPOSITORY_FEATURE_KEY, fromRepository.reducer),
    EffectsModule.forFeature([RepositoryEffects]),
    HttpClientModule,
  ],
  providers: [RepositoryService, RepositoryFacade],
})
export class DataAccessRepositoryModule {}
