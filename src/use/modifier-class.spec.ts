import { describe, test, expect } from 'vitest';
import useModifier from '@/use/modifier-class';
import { withSetup } from '../../test-helper/mount-helper';

describe('check modifier', () => {
  test('returns correct modification', () => {
    const [result, app] = withSetup(() => useModifier());
    const { getModifierClasses } = result;
    // console.log('res', result);
    expect(getModifierClasses('base')).toEqual(null);
    expect(getModifierClasses('base', [null])).toEqual([]);
    expect(getModifierClasses('base', 'modifier')).toEqual(['base--modifier']);
    expect(getModifierClasses('standard', ['special', 'other'])).toEqual([
      'standard--special',
      'standard--other',
    ]);
    app.unmount();
  });
});
