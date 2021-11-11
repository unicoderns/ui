<template>
  <component
    :is="componentTag"
    :type="componentType"
    :role="componentRole"
    :class="classes"
    @click="attemptToggle"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, watchEffect, ref, toRefs } from 'vue'
import { cssClassPrefix } from '../../utils'

const className = 'btn'
const classPrefix = cssClassPrefix(className)

export default defineComponent({
  TAG_NAME: className,
  props: {
    anchor: {
      type: Boolean,
      default: false,
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const { anchor, toggle, outline, variant, size, active } = toRefs(props)
    const activeState = ref(active.value)

    const componentTag = computed((): 'button' | 'a' => {
      return anchor.value ? 'a' : 'button'
    })

    const componentType = computed((): 'button' | null => {
      return anchor.value ? null : 'button'
    })

    const componentRole = computed((): 'button' | null => {
      return anchor.value ? 'button' : null
    })

    const classes = computed((): string[] => {
      const modifier = outline.value ? 'outline-' : ''
      return [
        className,
        ...(variant.value ? [`${classPrefix}${modifier}${variant.value}`] : []),
        ...(size.value ? [`${classPrefix}${size.value}`] : []),
        ...(activeState.value ? ['active'] : []),
      ]
    })

    const attemptToggle = (): void => {
      if (toggle.value) {
        activeState.value = !activeState.value
        emit('toggle', activeState.value)
      }
    }

    watchEffect(() => {
      activeState.value = active.value
    })

    return {
      activeState,
      componentTag,
      componentType,
      componentRole,
      classes,
      attemptToggle,
    }
  },
})
</script>
