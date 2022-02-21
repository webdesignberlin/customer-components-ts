<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import useModifier from '@/use/modifier-class';
import { Modifier, NativeTag } from './types';

const props = defineProps({
  modifier: {
    type: [Array, String] as PropType<Modifier[] | Modifier>,
  },
  tag: {
    type: String as PropType<NativeTag>,
    default: 'button',
  },
  text: {
    type: String,
  },
  isDarkMode: {
    type: Boolean,
    default: false,
  },
});

const {
  getModifierClasses,
} = useModifier();
console.log(props.modifier);

defineEmits(['counter-update']);
</script>

<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :class="[ getModifierClasses('btn', modifier), { 'btn--dark' : isDarkMode } ]"
    class="btn">
    <slot>
      {{ text }}
    </slot>
    <span class="btn__loading" />
  </component>
</template>

<style lang="scss" scoped>
$green: green;
h1 {
    background-color: $green;
}
</style>
