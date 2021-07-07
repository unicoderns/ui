<template>
  <ul
    :class="classes"
    v-if="datasource"
    @keydown.down.stop.prevent="focusDown"
    @keydown.up.stop.prevent="focusUp"
    @keydown.space.stop.prevent="selectCurrent"
    @keydown.enter.stop.prevent="selectCurrent"
  >
    <UiDropdownItem
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
      <span v-else>{{ item?.content }}</span>
    </UiDropdownItem>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import { cssClassPrefix } from '@/utils'
import { isSelectable, MenuItem } from '@/types'
import ControlItemComponent from './control-item.component.vue'

const className = 'dropdown-menu'
const classPrefix = cssClassPrefix(className)

export default defineComponent({
  TAG_NAME: className,
  props: {
    datasource: {
      type: Array as PropType<MenuItem[]>,
      default: [],
    },
    defaultSelectedIndex: {
      type: Number,
      required: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    UiDropdownItem: ControlItemComponent,
  },
  emits: ['select'],
  setup(props, { emit, slots }) {
    const { datasource, invert, dropdown, defaultSelectedIndex } = toRefs(props)
    const selectedIndex = ref(defaultSelectedIndex?.value)
    let focusedIndex = -1
    const items = ref<HTMLElement[]>([])

    const classes = computed((): string[] => {
      return [
        className,
        invert.value ? `${classPrefix}dark` : '',
        !dropdown.value ? `${classPrefix}static` : '',
      ]
    })

    const getNextActivable = (step: number) => {
      const maxLength = items.value?.length - 1
      let index = focusedIndex + step
      for (; index >= 0 && index <= maxLength; index += step) {
        if (isSelectable(datasource.value[index])) {
          break
        }
      }
      return index
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
