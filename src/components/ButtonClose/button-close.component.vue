<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    :class="classes"
    @click="close"
  ></button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { cssClassPrefix } from '../../utils'

const className = 'btn-close'
const classPrefix = cssClassPrefix(className)

export default defineComponent({
  TAG_NAME: className,
  props: {
    ariaLabel: {
      type: String,
      default: 'Close',
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const { invert } = toRefs(props)

    const classes = computed((): string[] => {
      return [className, invert.value ? `${classPrefix}white` : '']
    })

    const close = (): void => {
      emit('close')
    }
    return {
      classes,
      close,
    }
  },
})
</script>
