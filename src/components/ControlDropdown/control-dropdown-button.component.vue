<template>
  <div v-if="splitButton" class="btn-group">
    <div v-if="before" class="btn-group dropstart" role="group">
      <UiButton
        v-bind="buttonProps"
        class="dropdown-toggle dropdown-toggle-split"
        @click="toggle"
      />
    </div>
    <UiButton
      v-bind="buttonProps"
      @click="toggle"
      :class="{ 'dropdown-toggle': !splitButton }"
    >
      <slot />
    </UiButton>
    <UiButton
      v-if="after"
      v-bind="buttonProps"
      class="dropdown-toggle"
      @click="toggle"
    />
  </div>
  <UiButton
    v-else
    v-bind="buttonProps"
    @click="toggle"
    :class="{ 'dropdown-toggle': !splitButton }"
  >
    <slot />
  </UiButton>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, ref, PropType } from 'vue'
import { Direction, Directions } from '../../types/menu'
import { ButtonControlComponent } from '@/components/ButtonControl'

const className = 'dropdown'

export default defineComponent({
  TAG_NAME: className,
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
    anchor: {
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
    splitButton: {
      type: Boolean,
      default: false,
    },
    arrowDirection: {
      type: String as PropType<Direction>,
      default: null,
    },
  },
  components: {
    UiButton: ButtonControlComponent,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const {
      outline,
      anchor,
      size,
      variant,
      splitButton,
      arrowDirection,
    } = toRefs(props)

    const expanded = ref(false)
    const buttonProps = computed(() => ({
      outline: outline.value,
      anchor: anchor.value,
      size: size.value,
      variant: variant.value,
      active: expanded.value,
    }))

    const before = computed(
      (): boolean =>
        splitButton.value && arrowDirection.value === Directions.Left
    )
    const after = computed(
      (): boolean =>
        splitButton.value && arrowDirection.value !== Directions.Left
    )

    const toggle = () => emit('toggle')

    return {
      expanded,
      buttonProps,
      before,
      after,
      toggle,
    }
  },
})
</script>
