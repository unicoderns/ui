<template>
  <ul
    :class="classes"
    v-if="datasource"
    @keydown.down.stop.prevent="focusDown"
    @keydown.up.stop.prevent="focusUp"
    @keydown.space.stop.prevent="selectCurrent"
    @keydown.enter.stop.prevent="selectCurrent"
  >
    <UiControlItem
      v-for="(item, i) in datasource"
      :key="i"
      @select="select(item, i)"
      v-bind="item"
      :active="selectedIndex === i"
      :ref="
        el => {
          items[i] = el
        }
      "
    >
      <slot v-if="slots.default" :item="item" />
      <span v-else>{{ item.content }}</span>
    </UiControlItem>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import { isSelectable, MenuItem } from '../../types'
import { ControlMenuThemeConfigModel } from './models/control-menu-theme-config.model'
import { getReactiveThemeConfig } from '../../utils'
import ControlItemComponent from './control-item.component.vue'

const TAG_NAME = 'menu'

export default defineComponent({
  TAG_NAME,
  props: {
    datasource: { type: Array as PropType<MenuItem[]>, default: [] },
    defaultSelectedIndex: { type: Number, required: false },
    invert: { type: Boolean, default: false },
    dropdown: { type: Boolean, default: false },
  },
  components: {
    UiControlItem: ControlItemComponent,
  },
  emits: ['select'],
  setup(props, { emit, slots, attrs }) {
    const { datasource, invert, dropdown, defaultSelectedIndex } = toRefs(props)
    const selectedIndex = ref(defaultSelectedIndex?.value)
    let focusedIndex = -1
    const items = ref<HTMLElement[]>([])

    const theme = getReactiveThemeConfig<ControlMenuThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.main,
        invert.value ? theme.value.cssClass.invert : '',
        !dropdown.value ? theme.value.cssClass.static : '',
      ]
    })

    const getNextActivable = (step: number) => {
      const maxLength = items.value?.length - 1
      let index = Math.min(focusedIndex + step, maxLength)
      for (; index >= 0 && index <= maxLength; index += step) {
        if (isSelectable(datasource.value[index])) {
          return index
        }
      }
      return focusedIndex
    }

    const moveFocus = (step: number) => {
      if (step === 0) {
        return
      }
      const nextIndex = getNextActivable(step)
      if (focusedIndex !== nextIndex) {
        focusedIndex = nextIndex
        items.value[focusedIndex]?.focus()
      }
    }

    const focusUp = (): void => moveFocus(-1)
    const focusDown = (): void => moveFocus(1)

    const select = (item: MenuItem, index: number): void => {
      selectedIndex.value = focusedIndex = index
      emit('select', item, index)
    }

    const selectCurrent = (): void => {
      emit('select', items.value[focusedIndex])
    }

    return {
      classes,
      select,
      selectCurrent,
      focusUp,
      focusDown,
      moveFocus,
      items,
      selectedIndex,
      slots,
    }
  },
  mounted() {
    this.moveFocus(1)
  },
})
</script>

<style scoped>
.dropdown-menu {
  display: block;
}
.dropdown-menu-static {
  position: static;
}
</style>
