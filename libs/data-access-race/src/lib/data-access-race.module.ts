import { NgModule } from '@angular/core';
import { DataAccessRepositoryModule } from '@dungeon-manager/data-access-repository';
import { RaceFacade } from './state/races.facade';

@NgModule({
  imports: [DataAccessRepositoryModule],
  providers: [RaceFacade],
})
export class DataAccessRaceModule {}
