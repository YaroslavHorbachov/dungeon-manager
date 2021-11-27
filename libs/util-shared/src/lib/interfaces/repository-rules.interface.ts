interface RepositoryRuleDefaultProps {
  readonly id: number;
  readonly name: string;
}

interface RepositoryRuleDescriptionProps extends RepositoryRuleDefaultProps {
  readonly description: string;
}

interface RepositoryRuleRaceGroup extends RepositoryRuleDefaultProps {
  readonly avatarUrl: string | null;
}

interface RepositoryRuleCreatureGroupFlag extends RepositoryRuleDefaultProps {
  readonly key: string;
  readonly value: number | null;
}

interface RepositoryRuleCreatureGroup extends RepositoryRuleDescriptionProps {
  readonly categoryId: number;
  readonly enabledByDefault: boolean;
  readonly allowDuplicates: boolean;
  readonly allowCombat: boolean;
  readonly isPrimary: boolean;
  readonly isMisc: boolean;
  readonly specialQualityTitle: string | null;
  readonly specialQualityText: string | null;
  readonly flags: string[];
  readonly monsterTypes: number[];
  readonly ownerStats: number[];
  readonly actionSnippet: string | null;
}

interface RepositoryRuleMonsterType extends RepositoryRuleDescriptionProps {
  readonly pluralizedName: string;
  readonly avatarUrl: string;
}

interface RepositoryRuleChallengeRating {
  readonly id: number;
  readonly value: number;
  readonly proficiencyBonus: number;
  readonly xp: number;
}

interface RepositoryRuleSpellComponent extends RepositoryRuleDescriptionProps {
  readonly shortName: string;
}

interface RepositoryRuleBasicActionActivation {
  readonly activationTime: null;
  readonly activationType: number; // TODO: Replace by enum
}

interface RepositoryRuleBasicAction extends RepositoryRuleDescriptionProps {
  readonly activation: RepositoryRuleBasicActionActivation;
}

interface RepositoryRuleArmor extends RepositoryRuleDescriptionProps {
  readonly categoryId: number; // TODO: Replace by enum
}

interface RepositoryRuleWeapon extends RepositoryRuleDescriptionProps {
  readonly categoryId: number; // TODO: Replace by enum
}

interface RepositoryRuleLifestyle extends RepositoryRuleDescriptionProps {
  readonly cost: string;
}

interface RepositoryRuleConditionLevel {
  readonly id: number;
  readonly level: number;
  readonly effect: string;
}

interface RepositoryRuleCondition extends RepositoryRuleDescriptionProps {
  readonly type: number;
  readonly slug: string;
  readonly levels: RepositoryRuleConditionLevel[];
}

interface RepositoryRuleStatModifier {
  readonly value: number;
  readonly modifier: number;
}

interface RepositoryRuleAlignment extends RepositoryRuleDefaultProps {
  readonly availableToCharacter: boolean;
  readonly description: string | null;
}

interface RepositoryRuleLevelProficiencyBonus {
  readonly level: number;
  readonly bonus: number;
}

export interface RepositoryRuleStat extends RepositoryRuleDefaultProps {
  readonly key: string;
  readonly compendiumText: string;
}

interface RepositoryRuleCurrency extends RepositoryRuleDefaultProps {
  readonly conversionFromGp: number;
  readonly weight: number;
}

interface RepositoryRuleAbilitySkill extends RepositoryRuleDescriptionProps {
  readonly stat: number;
}

interface RepositoryRuleCreatureSize extends RepositoryRuleDefaultProps {
  readonly weightType: number;
}

export interface RepositoryRules {
  readonly minExhaustionLevel: number;
  readonly maxExhaustionLevel: number;
  readonly maxDeathsavesFail: number;
  readonly maxDeathsavesSuccess: number;
  readonly maxSpellLevel: number;
  readonly maxAttunedItemCount: number;
  readonly maxCharacterLevel: number;
  readonly noArmorAcAmount: number;
  readonly maxStatScore: number;
  readonly minStatScore: number;
  readonly basicMaxStatScore: number;
  readonly minimumHpTotal: number;
  readonly minimumLimitedUseMaxUse: number;
  readonly longRestMinimumHitDiceUsedRecovered: number;
  readonly baseWeaponReach: number;
  readonly weaponPropertyReachDistance: number;
  readonly defaultWeaponImageUrl: string;
  readonly defaultGearImageUrl: string;
  readonly defaultArmorImageUrl: string;
  readonly defaultRacePortraitUrl: string;
  readonly ritualCastingTimeMinuteAddition: number;
  readonly raceGroups: RepositoryRuleRaceGroup[];
  readonly creatureGroupFlags: RepositoryRuleCreatureGroupFlag[];
  readonly monsterTypes: RepositoryRuleMonsterType[];
  readonly challengeRatings: RepositoryRuleChallengeRating[];
  readonly creatureGroups: RepositoryRuleCreatureGroup[];
  readonly spellComponents: RepositoryRuleSpellComponent[];
  readonly basicActions: RepositoryRuleBasicAction[];
  readonly rules: RepositoryRuleDescriptionProps[];
  readonly armor: RepositoryRuleArmor[];
  readonly tools: RepositoryRuleDescriptionProps[];
  readonly weapons: RepositoryRuleWeapon[];
  readonly weaponProperties: RepositoryRuleDescriptionProps[];
  readonly aoeTypes: RepositoryRuleDescriptionProps[];
  readonly lifestyles: RepositoryRuleLifestyle[];
  readonly conditions: RepositoryRuleCondition[];
  readonly statModifiers: RepositoryRuleStatModifier[];
  readonly alignments: RepositoryRuleAlignment[];
  readonly levelProficiencyBonuses: RepositoryRuleLevelProficiencyBonus[];
  readonly levelExperiencePoints: number[];
  readonly diceValues: number[];
  readonly stats: RepositoryRuleStat[];
  readonly currencies: RepositoryRuleCurrency[];
  readonly abilitySkills: RepositoryRuleAbilitySkill[];
  readonly creatureSizes: RepositoryRuleCreatureSize[];
  readonly movements: RepositoryRuleDescriptionProps[];
  readonly multiClassSpellSlots: number[][];
  readonly pactMagicMultiClassSpellSlots: number[][];
  readonly defaultAttunedItemCountMax: number;
  readonly maxAttunedItemCountMax: number;
  readonly minAttunedItemCountMax: number;
}
