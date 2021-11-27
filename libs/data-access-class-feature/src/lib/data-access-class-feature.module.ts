import { NgModule } from '@angular/core';
import { DataAccessRepositoryModule } from '@dungeon-manager/data-access-repository';
import { ClassesFeaturesFacade } from './state/classes-features.facade';

@NgModule({
  imports: [DataAccessRepositoryModule],
  providers: [ClassesFeaturesFacade],
})
export class DataAccessClassFeatureModule {}
