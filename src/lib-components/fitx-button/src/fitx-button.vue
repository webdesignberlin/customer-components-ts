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
</script>

<template>
  <component
    :is="tag"
    :class="[
      getModifierClasses('btn', modifier),
      { 'btn--dark' : isDarkMode },
    ]"
    class="btn">
    <slot>
      {{ text }}
    </slot>
    <span class="btn__loading" />
  </component>
</template>

<style lang="scss" scoped>
@use '~@/assets/styles/mixin-reset.scss' as reset;
.btn {
  @include reset.btn-reset();
}
</style>
