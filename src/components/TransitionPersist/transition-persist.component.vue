<template>
  <transition
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    leave-to-class=""
    leave-active-class=""
    leave-from-class=""
    :enter-to-class="presistentClass"
    enter-active-class=""
    enter-from-class=""
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

const className = 'transition-persist'

export default defineComponent({
  TAG_NAME: className,
  props: {
    presistentClass: {
      type: String,
      default: 'show',
    },
  },
  setup(props) {
    const { presistentClass } = toRefs(props)

    const classes = computed((): string[] => {
      return presistentClass.value
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
