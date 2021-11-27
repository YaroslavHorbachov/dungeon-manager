import { BaseRaces } from '../enums';

interface RepositoryRaceWeightSpeeds {
  readonly walk: number;
  readonly fly: number;
}

export interface RepositoryRace {
  readonly raceId: number;
  readonly subraceId: number;
  readonly baseRaceName: BaseRaces | string;
  readonly fullName: string;
  readonly description: string;
  readonly avatarUrl: string | null;
  readonly portraitAvatarUrl: string;
  readonly weightSpeeds: RepositoryRaceWeightSpeeds;
}
