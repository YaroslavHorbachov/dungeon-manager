let id = 0;

export class CharacterModel {
  public readonly id = id++;

  constructor(public readonly name: string) {}
}
