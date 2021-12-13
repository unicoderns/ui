<template>
  <div
    ref="mainContainer"
    :class="classes"
    v-if="datasource"
    @focusout="focusout"
  >
    <UiDropdownButton
      ref="mainButton"
      v-bind="buttonProps"
      :aria:groupRole="aria.groupRole"
      @toggle="toggle"
    >
      <span v-if="!!label">{{ label }}</span>
      <slot v-else-if="slots.label" name="label" />
    </UiDropdownButton>
    <UiMenu
      data-bs-popper
      ref="menu"
      v-if="expanded"
      :dropdown="true"
      :datasource="datasource"
      :invert="invert"
      :defaultSelectedIndex="defaultSelectedIndex"
      :aria-expanded="aria.expanded"
      @select="select(item)"
    >
      <template v-if="slots.item" v-slot="{ item }">
        <slot name="item" :item="item" />
      </template>
    </UiMenu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, ref, watch, PropType } from 'vue'
import { createPopper, Placement } from '@popperjs/core'
import {
  Direction,
  Directions,
  MenuItem,
  SizeVariant,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  isRTL,
  PopperPlacement,
} from '@unicodernsui/core'
import { UiMenu } from '@unicodernsui/menu'
import { bsUiDropdownThemeConfigDefaults } from './defaults/bs-ui-dropdown-theme.config'
import { UiDropdownThemeConfigModel } from './models/ui-dropdown-theme-config.model'
import { UiDropdownAriaConfigModel } from './models/ui-dropdown-aria-config.model'
import { uiDropdownAriaDefaults } from './defaults/ui-dropdown-aria.config'
import UiDropdownButton from './ui-dropdown-button.component.vue'

const TAG_NAME = 'uiDropdown'

export default defineComponent({
  TAG_NAME,
  props: {
    label: { type: String, default: null },
    datasource: { type: Array as PropType<MenuItem[]>, default: () => [] },
    invert: { type: Boolean, default: false },
    anchor: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    variant: { type: String, default: null },
    size: { type: String as PropType<SizeVariant>, default: null },
    splitButton: { type: Boolean, default: false },
    defaultSelectedIndex: { type: Number, required: false },
    disableBackdrop: { type: Boolean, default: false },
    arrowDirection: { type: String as PropType<Direction>, default: null },
    menuAlignEnd: { type: Boolean, default: false },
    ['aria:expanded']: { type: String, default: null },
    ['aria:groupRole']: { type: String, default: null },
  },
  components: {
    UiDropdownButton,
    UiMenu,
  },
  emits: ['select', 'show', 'hide'],
  setup(props, { emit, slots, attrs }) {
    const {
      outline,
      anchor,
      size,
      variant,
      splitButton,
      disableBackdrop,
      arrowDirection,
      menuAlignEnd,
    } = toRefs(props)

    const expanded = ref(false)
    const mainContainer = ref<HTMLElement | null>(null)
    const mainButton = ref<{ $el: HTMLElement; focus: () => void } | null>(null)
    const menu = ref<{ $el: HTMLElement } | null>(null)

    const theme = useReactiveThemeConfig<UiDropdownThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiDropdownThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiDropdownAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiDropdownAriaDefaults
    )

    const arrowDirectionClass = (direction: Direction): string => {
      if (!direction || !theme.value.cssClass.directions[direction]) {
        return ''
      }

      return theme.value.cssClass.directions[direction]
    }

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.main,
        arrowDirectionClass(arrowDirection.value),
      ]
    })

    const buttonProps = computed(() => ({
      anchor: anchor.value,
      arrowDirection: arrowDirection.value,
      expanded: expanded.value,
      outline: outline.value,
      size: size.value,
      splitButton: splitButton.value,
      variant: variant.value,
    }))

    const toggle = () => (expanded.value = !expanded.value)
    const select = (item: MenuItem): void => {
      emit('select', item)
    }
    const hide = () => {
      expanded.value = false
      mainButton.value?.focus()
    }
    const show = () => {
      expanded.value = true
    }

    const getPlacement = () => {
      const PLACEMENT_TOP: Placement = isRTL()
        ? PopperPlacement.TopEnd
        : PopperPlacement.TopStart
      const PLACEMENT_TOPEND: Placement = isRTL()
        ? PopperPlacement.TopStart
        : PopperPlacement.TopEnd
      const PLACEMENT_BOTTOM: Placement = isRTL()
        ? PopperPlacement.BottomEnd
        : PopperPlacement.BottomStart
      const PLACEMENT_BOTTOMEND: Placement = isRTL()
        ? PopperPlacement.BottomStart
        : PopperPlacement.BottomEnd
      const PLACEMENT_RIGHT: Placement = isRTL()
        ? PopperPlacement.LeftStart
        : PopperPlacement.RightStart
      const PLACEMENT_LEFT: Placement = isRTL()
        ? PopperPlacement.RightStart
        : PopperPlacement.LeftStart

      if (arrowDirection.value === Directions.Right) {
        return PLACEMENT_RIGHT
      }
      if (arrowDirection.value === Directions.Left) {
        return PLACEMENT_LEFT
      }

      const isEnd = menuAlignEnd.value

      if (arrowDirection.value === Directions.Up) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM
    }

    const popperConfig = () => ({
      placement: getPlacement(),
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            boundary: 'clippingParents',
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 2],
          },
        },
        {
          name: 'flip',
        },
      ],
    })

    const focusout = (event: FocusEvent) => {
      if (
        !disableBackdrop.value &&
        (!event.relatedTarget ||
          !mainContainer.value?.contains(event.relatedTarget as Node))
      ) {
        expanded.value = false
      }
    }

    const watchExpanded = watch(expanded, value => {
        value ? emit('show') : emit('hide')

        if (value && mainButton.value && menu.value) {
          console.log('menu.value', popperConfig())
          createPopper(mainButton.value.$el, menu.value?.$el, popperConfig())
        }
      },
      { flush: 'post' }
    )

    return {
      classes,
      aria,
      expanded,
      buttonProps,
      mainContainer,
      mainButton,
      menu,
      slots,
      toggle,
      select,
      watchExpanded,
      hide,
      show,
      focusout,
    }
  },
})
</script>
<style scoped>
.dropdown {
  display: inline-block;
}
</style>
