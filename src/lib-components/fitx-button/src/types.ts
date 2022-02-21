export const modifier = [
  'secondary',
  'tertiary',
  'quaternary',
  'disabled',
  'small',
  'fake-hover',
] as const;
export type Modifier = typeof modifier[number];

export const nativeTags = [
  'button',
  'a',
] as const;
export type NativeTag = typeof nativeTags[number];
