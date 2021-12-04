<template>
  <div v-if="splitButton" :class="theme.cssClass.components.buttonGroup">
    <div
      v-if="before"
      :class="theme.cssClass.components.buttonAtStart"
      :role="aria.groupRole"
    >
      <UiButton
        v-bind="buttonProps"
        :class="theme.cssClass.components.buttonSplit"
        @click="toggle"
      />
    </div>
    <UiButton
      v-bind="buttonProps"
      @click="toggle"
      :class="{ [theme.cssClass.components.buttonToggle]: !splitButton }"
    >
      <slot />
    </UiButton>
    <UiButton
      v-if="after"
      v-bind="buttonProps"
      :class="theme.cssClass.components.buttonToggle"
      @click="toggle"
    />
  </div>
  <UiButton
    v-else
    v-bind="buttonProps"
    @click="toggle"
    :class="{ [theme.cssClass.components.buttonToggle]: !splitButton }"
  >
    <slot />
  </UiButton>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, ref, PropType } from 'vue'
import { Direction, Directions } from '../../types/menu'
import { UiButton } from '../../components/ButtonControl'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '../../utils'
import { ControlDropdownAccessibilityConfigModel } from './models/control-dropdown-accessibility-config.model'
import { ControlDropdownThemeConfigModel } from './models/control-dropdown-theme-config.model'
import { SizeVariant } from '../../types'

const TAG_NAME = 'dropdown'

export default defineComponent({
  TAG_NAME,
  props: {
    invert: { type: Boolean, default: false },
    anchor: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    variant: { type: String, required: true },
    size: { type: String as PropType<SizeVariant>, default: null },
    splitButton: { type: Boolean, default: false },
    arrowDirection: { type: String as PropType<Direction>, default: null },
    ['aria:groupRole']: { type: String, default: null },
  },
  components: {
    UiButton,
  },
  emits: ['toggle'],
  setup(props, { emit, attrs }) {
    const {
      outline,
      anchor,
      size,
      variant,
      splitButton,
      arrowDirection,
      ...extraProps
    } = toRefs(props)

    const expanded = ref(false)

    const theme = useReactiveThemeConfig<ControlDropdownThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )
    const aria = useReactiveAriaConfig<ControlDropdownAccessibilityConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

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
      theme,
      aria,
      toggle,
    }
  },
})
</script>
