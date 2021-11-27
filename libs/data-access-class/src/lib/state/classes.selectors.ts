import { ClassesFeaturesSelectors } from '@dungeon-manager/data-access-class-feature';
import { RepositorySelectors } from '@dungeon-manager/data-access-repository';
import { ClassModel } from '@dungeon-manager/util-shared';
import { createSelector } from '@ngrx/store';
import { sortBy } from 'lodash';

// Lookup the 'Classes' feature state managed by NgRx

export const getClasses = createSelector(
  RepositorySelectors.getClasses,
  ClassesFeaturesSelectors.getFeatures,
  (classes, features) => {
    return classes.map((item) => {
      const classFeatures = features.filter((feature) => feature.classId === item.id);
      const sortedFeatures = sortBy(classFeatures, ({ displayOrder }) => displayOrder);

      return new ClassModel(item, sortedFeatures);
    });
  }
);
