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
      @toggle="toggle">
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
      :class="menuClasses"
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
import {
  Direction,
  MenuItem,
  ResponsiveConfig,
  SizeVariant,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  useReactiveResponsiveConfig,
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
    datasource: { type: Array as PropType<MenuItem[]>, default: [] },
    invert: { type: Boolean, default: false },
    anchor: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    variant: { type: String, default: null },
    size: { type: String as PropType<SizeVariant>, default: null },
    splitButton: { type: Boolean, default: false },
    defaultSelectedIndex: { type: Number, required: false },
    arrowDirection: { type: String as PropType<Direction>, default: null },
    ['menuAlignEnd']: { type: Boolean, default: false },
    ['menuAlignEnd:xs']: { type: Boolean, default: false },
    ['menuAlignEnd:sm']: { type: Boolean, default: false },
    ['menuAlignEnd:md']: { type: Boolean, default: false },
    ['menuAlignEnd:lg']: { type: Boolean, default: false },
    ['menuAlignEnd:xl']: { type: Boolean, default: false },
    ['menuAlignEnd:xxl']: { type: Boolean, default: false },
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
      arrowDirection,
    } = toRefs(props)

    const expanded = ref(false)
    const mainContainer = ref<HTMLElement | null>(null)
    const mainButton = ref<HTMLElement | null>(null)

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

    // TODO: Popper: adding the class is not enough to move the menu at enc
    const menuAlignEndClass = (menuAlignEnd: ResponsiveConfig): string[] => {
      if (!menuAlignEnd) return []
      return [
        menuAlignEnd.all ? theme.value.cssClass.menuEndAll : '',
        ...Object.entries(menuAlignEnd.variants).map(([key, value]) =>
          value ? theme.value.cssClass.menuEndVariants[key] : ''
        ),
      ]
    }

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.main,
        arrowDirectionClass(arrowDirection.value),
      ]
    })

    const menuClasses = computed((): string[] => {
      return menuAlignEndClass(
        useReactiveResponsiveConfig('menuAlignEnd', attrs, props).value
      )
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
    const focusout = (event: FocusEvent) => {
      if (
        !event.relatedTarget ||
        !mainContainer.value?.contains(event.relatedTarget as Node)
      ) {
        expanded.value = false
      }
    }

    const watchExpanded = watch(expanded, value =>
      value ? emit('show') : emit('hide')
    )

    return {
      classes,
      menuClasses,
      aria,
      expanded,
      buttonProps,
      mainContainer,
      mainButton,
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
