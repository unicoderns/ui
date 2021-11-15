<template>
  <div
    ref="mainContainer"
    :class="classes"
    v-if="datasource"
    @focusout="focusout"
  >
    <UiDropdownButton ref="mainButton" v-bind="buttonProps" @toggle="toggle">
      <span v-if="!!label">{{ label }}</span>
      <slot v-else-if="slots.label" name="label" />
    </UiDropdownButton>
    <UiDropdownMenu
      ref="menu"
      v-if="expanded"
      :dropdown="true"
      :datasource="datasource"
      :invert="invert"
      :defaultSelectedIndex="defaultSelectedIndex"
      :aria-expanded="expanded"
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
import { computed, defineComponent, PropType, toRefs, ref, watch } from 'vue'
import {
  ContextualVariants,
  Direction,
  Directions,
  MenuItem,
  Responsive,
} from '../../types'
import ControlMenuComponent from '../../components/ControlMenu/control-menu.component.vue'
import DropdownButtonComponent from './control-dropdown-button.component.vue'

const className = 'dropdown'

export default defineComponent({
  TAG_NAME: className,
  props: {
    label: {
      type: String,
      required: false,
    },
    datasource: {
      type: Array as PropType<MenuItem[]>,
      default: [],
    },
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
      required: false,
      default: ContextualVariants.Primary,
    },
    size: {
      type: String,
      default: null,
    },
    splitButton: {
      type: Boolean,
      default: false,
    },
    defaultSelectedIndex: {
      type: Number,
      required: false,
    },
    arrowDirection: {
      type: String as PropType<Direction>,
      default: null,
    },
    menuAlignEnd: {
      type: Object as PropType<Responsive<boolean> | boolean>,
      default: null,
    },
  },
  components: {
    UiDropdownButton: DropdownButtonComponent,
    UiDropdownMenu: ControlMenuComponent,
  },
  emits: ['select', 'show', 'hide'],
  setup(props, { emit, slots }) {
    const {
      outline,
      anchor,
      size,
      variant,
      splitButton,
      arrowDirection,
      menuAlignEnd,
    } = toRefs(props)

    const expanded = ref(false)
    const mainContainer = ref<HTMLElement | null>(null)
    const mainButton = ref<HTMLElement | null>(null)

    const arrowDirectionClass = (direction: Direction): string => {
      if (!direction) return ''
      switch (direction) {
        case Directions.Up:
          return 'dropup'
        case Directions.Down:
          return 'dropdown'
        case Directions.Left:
          return 'dropstart'
        case Directions.Right:
          return 'dropend'
        default:
          return ''
      }
    }
    // TODO: Popper??
    const menuAlignEndClass = (
      menuAlignEnd: Responsive<boolean> | boolean
    ): string[] => {
      if (!menuAlignEnd) return []
      if (typeof menuAlignEnd === 'boolean') {
        return [menuAlignEnd === true ? '' : 'dropdown-menu-end']
      }
      console.log('menuAlignEnd', menuAlignEnd)
      return [
        menuAlignEnd.all === true ? 'dropdown-menu-end' : '',
        ...Object.entries(menuAlignEnd.variants).map(([key, value]) =>
          value ? `dropdown-menu-${key}-end` : ''
        ),
      ]
    }

    const classes = computed((): string[] => {
      return [className, arrowDirectionClass(arrowDirection.value)]
    })

    const menuClasses = computed((): string[] => {
      return menuAlignEndClass(menuAlignEnd.value)
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
      expanded,
      buttonProps,
      toggle,
      select,
      watchExpanded,
      hide,
      show,
      focusout,
      mainContainer,
      mainButton,
      slots,
    }
  },
})
</script>
<style scoped>
.dropdown {
  display: inline-block;
}
</style>
