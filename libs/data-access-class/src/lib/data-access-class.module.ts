import { NgModule } from '@angular/core';
import { DataAccessRepositoryModule } from '@dungeon-manager/data-access-repository';
import { ClassFacade } from './state/classes.facade';

@NgModule({
  imports: [DataAccessRepositoryModule],
  providers: [ClassFacade],
})
export class DataAccessClassModule {}
