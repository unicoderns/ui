<template>
  <transition
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    leave-to-class=""
    leave-active-class=""
    leave-from-class=""
    :enter-to-class="theme.cssClass.persistent"
    enter-active-class=""
    enter-from-class=""
    ref="transitionEl"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
const TAG_NAME = 'uiTransition'
export default { TAG_NAME }
</script>

<script setup lang="ts">
import { computed, useAttrs, ref, Ref, onMounted } from 'vue'
import { useReactiveThemeConfig } from '@uicr/core'
import { UiTransitionThemeConfigModel } from './models/ui-transition-theme-config.model'
import { uiTransitionThemeConfigDefaults } from './defaults/ui-transition-theme.config'

const attrs = useAttrs()

const props = defineProps({
  ['theme:persistent']: { type: String, default: null },
})
const transitionEl: Ref<HTMLElement | null> = ref(null)

const theme = useReactiveThemeConfig<UiTransitionThemeConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiTransitionThemeConfigDefaults
)

const classes = computed((): string[] => {
  return theme.value.cssClass.persistent
    .split(' ')
    .filter((cssClass: string) => cssClass)
})

const detachPresistentClass = (el: HTMLElement) => {
  classes.value.forEach((cssClass: string) => el.classList.remove(cssClass))
}

const atachPresistentClass = (el: HTMLElement) => {
  classes.value.forEach((cssClass: string) => el.classList.add(cssClass))
}

const afterEnter = (el: HTMLElement): void => {
  atachPresistentClass(el)
}

const beforeLeave = (el: HTMLElement): void => {
  detachPresistentClass(el)
}

onMounted(() => {
  if (transitionEl.value && transitionEl.value.classList) {
    atachPresistentClass(transitionEl.value)
  }
})
</script>
