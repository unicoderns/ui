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
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { getReactiveThemeConfig } from '../../utils'
import { computed, defineComponent } from 'vue'
import { TransitionPersistThemeConfigModel } from './models/transition-persist-theme-config.model'

const TAG_NAME = 'transitionPersist'

export default defineComponent({
  TAG_NAME,
  props: {
    ['class:persistent']: { type: String, default: null },
  },
  setup(props, { attrs }) {

    const theme = getReactiveThemeConfig<
      TransitionPersistThemeConfigModel
    >(TAG_NAME, attrs, props)

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

    return {
      classes,
      theme,
      afterEnter,
      beforeLeave,
      atachPresistentClass,
      detachPresistentClass,
    }
  },
  mounted() {
    if (this.$el && this.$el.classList) {
      this.atachPresistentClass(this.$el)
    }
  },
})
</script>
