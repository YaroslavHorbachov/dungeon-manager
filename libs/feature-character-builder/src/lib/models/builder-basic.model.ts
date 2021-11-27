import { CharacterHitPointTypes } from '@dungeon-manager/util-shared';

export class BuilderBasicModel {
  constructor(public readonly name: string, public readonly hitPointType: CharacterHitPointTypes) {}
}
