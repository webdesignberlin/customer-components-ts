/* export enum ModifierEnum {
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Quaternary = 'quaternary',
  Disabled = 'disabled',
  Small = 'small',
  FakeHover = 'fake-hover',
};

export const ModifierList: ModifierEnum[] = Object.values(ModifierEnum);
export type Modifier = typeof ModifierList[number]; */

// export type Modifier = 'secondary' | 'tertiary' | 'quaternary' | 'disabled' | 'small' | 'fake-hover';
export const modifier = [
  'secondary',
  'tertiary',
  'quaternary',
  'disabled',
  'small',
  'fake-hover',
] as const;

export type Modifier = typeof modifier[number];
