export interface RepositoryClassWealthDice {
  readonly diceCount: number;
  readonly diceValue: number;
  readonly diceMultiplier: number | null;
  readonly diceString: string;
}

export interface RepositoryClassSpellRules {
  readonly multiClassSpellSlotDivisor: number;
  readonly isRitualSpellCaster: boolean;
  readonly levelCantripsKnownMaxes: number[];
  readonly levelSpellKnownMaxes: number[];
  readonly levelSpellSlots: number[][];
  readonly multiClassSpellSlotRounding: number;
}

export interface RepositoryClassPrerequisiteMapping {
  readonly id: number;
  readonly entityId: number;
  readonly type: string;
  readonly subType: string;
  readonly value: number;
  readonly friendlyTypeName: string;
  readonly friendlySubTypeName: string;
}

export interface RepositoryClassPrerequisite {
  readonly description: string;
  readonly prerequisiteMappings: RepositoryClassPrerequisiteMapping[];
}

export interface RepositoryClass {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly equipmentDescription: string;
  readonly avatarUrl: string;
  readonly portraitAvatarUrl: string;
  readonly hitDice: number;
  readonly wealthDice: RepositoryClassWealthDice;
  readonly canCastSpells: boolean;
  readonly knowsAllSpells: boolean | null;
  readonly spellContainerName: string | null; // "Spellbook"
  readonly primaryAbilities: number[]; // primary ability id
  readonly spellRules: RepositoryClassSpellRules;
  readonly prerequisites: RepositoryClassPrerequisite[];
}
