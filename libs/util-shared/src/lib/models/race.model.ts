import { RepositoryRace, RepositoryRaceTrait } from '../interfaces';

export class RaceModel {
  public readonly raceId!: number;
  public readonly subraceId!: number;
  public readonly subraceName!: string;
  public readonly raceName?: string;
  public readonly description?: string;
  public readonly avatarUrl?: string | null;
  public readonly portraitAvatarUrl?: string;
  public readonly traits: RepositoryRaceTrait[] = [];

  constructor(race: RepositoryRace, traits: RepositoryRaceTrait[]) {
    Object.assign(this, race);

    this.raceName = race.baseRaceName;
    this.subraceName = race.fullName;
    this.traits = traits;
  }

  public get raceTitle(): string | undefined {
    return this.isSubrace ? this.subraceName : this.raceName;
  }

  public get isSubrace(): boolean {
    return this.raceId !== this.subraceId;
  }
}
