import { Injectable } from '@angular/core';
import {
  RepositoryBaseModel,
  RepositoryBaseModels,
  RepositoryClass,
  RepositoryClassFeature,
  RepositoryRace,
  RepositoryRaceTrait,
  RepositoryRules,
} from '@dungeon-manager/util-shared';
import { defer, Observable } from 'rxjs';

@Injectable()
export class RepositoryService {
  public loadRaces(): Observable<RepositoryBaseModels<RepositoryRace>> {
    return defer(() => import('../../assets/repository/races.json'));
  }

  public loadRacesTraits(): Observable<RepositoryBaseModels<RepositoryRaceTrait>> {
    return defer(() => import('../../assets/repository/races-traits.json'));
  }

  public loadClasses(): Observable<RepositoryBaseModels<RepositoryClass>> {
    return defer(() => import('../../assets/repository/classes.json'));
  }

  public loadClassesFeatures(): Observable<RepositoryBaseModels<RepositoryClassFeature>> {
    return defer(() => import('../../assets/repository/classes-features.json'));
  }

  public loadRules(): Observable<RepositoryBaseModel<RepositoryRules>> {
    return defer(() => import('../../assets/repository/rules.json'));
  }
}
