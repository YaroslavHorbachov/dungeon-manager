import { NgModule } from '@angular/core';
import { DataAccessRepositoryModule } from '@dungeon-manager/data-access-repository';
import { StatFacade } from './state/stat.facade';

@NgModule({
  imports: [DataAccessRepositoryModule],
  providers: [StatFacade],
})
export class DataAccessStatModule {}
