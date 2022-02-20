<template>
  <div>
    <h1>TestComponent foo</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Modifier } from './types';
import validateValueWithList from '@/use/validate-value-with-list';
/*
interface Props {
  label?: string,
  modifier?: Modifier | Modifier[],
}

const props = defineProps<Props>()
*/

/* enum Modifier {
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Quaternary = 'quaternary',
  Disabled = 'disabled',
  Small = 'small',
  FakeHover = 'fake-hover',
}

console.log(validateValueWithList('smalli', Object.values(Modifier))); */

const props = defineProps({
  /* modifier: {
    type: String as () => Modifier,
  }, */
  modifier: {
    /* validator(value: Modifier | Modifier[]) {
      // The value must match one of these strings
      return validateValueWithList('smalli', Object.values(Modifier));
    } */
    type: [Array, String] as PropType<Modifier[] | Modifier>,
    // type: String as PropType<Modifier>,
    // default: null,
    // validator: (value: Modifier | Modifier[]) => validateValueWithList(value, Object.values(Modifier)),
    // validator: (value: Modifier[] | Modifier) => validateValueWithList(value, ModifierList),
  },
});

console.log(props.modifier);

defineEmits(['counter-update']);
</script>

<style lang="scss" scoped>
$green: green;
h1 {
    background-color: $green;
}
</style>
