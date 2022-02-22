import { ref } from 'vue';

type DefaultClass = string | string[];
type Modifiers = string | string[];

/**
 * Get Modifier Class by BEM Syntax
 * @return {
 * {refComponent: ToRef<null>,
 * componentModifier: ToRef<null>,
 * getModifierClasses: ((function(string, (Array|string)): (Array|string))|*),
 * getModifierClass: (function(*, *): string)}}
 */
export default function useModifier() {
  /* const componentModifier = ref(null);
  const refComponent = ref<HTMLDivElement>(); */
  const getModifierClass = (defaultClass: DefaultClass, modifier: Modifiers) => (`${defaultClass}--${modifier}`);

  /**
   * Get Modifier Classes
   * @param {DefaultClass} defaultClass
   * @param {string[]} modifiers
   * @returns {null | (string | null)[] | string[]}
   */
  const getModifierClasses = (defaultClass: DefaultClass, modifiers: Modifiers) => {
    if (!modifiers) {
      return null;
    }
    if (typeof modifiers === 'string') {
      return [getModifierClass(defaultClass, modifiers)];
    }
    return modifiers.map((mod) => {
      if (mod) {
        return `${defaultClass}--${mod}`;
      }
      return null;
    }).filter((Boolean));
  };
  return {
    /* componentModifier,
    refComponent, */
    getModifierClass,
    getModifierClasses,
  };
}
