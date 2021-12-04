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
    <UiDropdownMenu
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
    </UiDropdownMenu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, ref, watch, PropType } from 'vue'
import { Direction, MenuItem, ResponsiveConfig, SizeVariant } from '../../types'
import UiMenu from '../../components/ControlMenu/control-menu.component.vue'
import DropdownButtonComponent from './control-dropdown-button.component.vue'
import { ControlDropdownThemeConfigModel } from './models/control-dropdown-theme-config.model'
import { ControlDropdownAccessibilityConfigModel } from './models/control-dropdown-accessibility-config.model'
import { useReactiveAriaConfig, useReactiveThemeConfig, useReactiveResponsiveConfig } from '../../utils'

const TAG_NAME = 'dropdown'

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
    UiDropdownButton: DropdownButtonComponent,
    UiDropdownMenu: UiMenu,
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

    const arrowDirectionClass = (direction: Direction): string => {
      if (!direction || !theme.value.cssClass.directions[direction])
        return ''

      return theme.value.cssClass.directions[direction]
    }

    // TODO: Popper: adding the class is not enough to move the menu at enc
    const menuAlignEndClass = (
      menuAlignEnd: ResponsiveConfig
    ): string[] => {
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
      return menuAlignEndClass(useReactiveResponsiveConfig('menuAlignEnd', attrs, props).value)
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
