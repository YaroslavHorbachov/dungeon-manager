import { NgModule } from '@angular/core';
import { DataAccessRepositoryModule } from '@dungeon-manager/data-access-repository';
import { RaceTraitFacade } from './state/races-traits.facade';

@NgModule({
  imports: [DataAccessRepositoryModule],
  providers: [RaceTraitFacade],
})
export class DataAccessRaceTraitModule {}
