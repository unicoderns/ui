<template>
  <li @click="select">
    <a ref="item" v-if="isLink" :class="classes" v-bind="elementAttrs">
      <slot />
    </a>
    <button
      ref="item"
      v-else-if="isButton"
      :class="classes"
      type="button"
      v-bind="elementAttrs"
    >
      <slot />
    </button>
    <h6 v-else-if="isHeader" class="dropdown-header" v-bind="elementAttrs">
      <slot />
    </h6>
    <span v-else-if="isText" class="dropdown-item-text" v-bind="elementAttrs">
      <slot />
    </span>
    <hr v-else-if="isDivider" class="dropdown-divider" />
    <slot ref="item" v-else-if="isRaw" :class="classes" />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import { MenuItemType, MenuItemTypes } from '@/types'
import { MenuItemType, MenuItemTypes } from '../../types'

const className = 'dropdown-item'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<MenuItemType>,
      default: 'link',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    elementAttrs: {
      type: Object,
      default: null,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const { type, active, disabled } = toRefs(props)
    const item = ref<HTMLElement | null>(null)

    const classes = computed((): string[] => {
      return [
        className,
        active.value ? 'active' : '',
        disabled.value ? 'disabled' : '',
      ]
    })

    const isLink = computed(() => type.value === MenuItemTypes.Link)
    const isButton = computed(() => type.value === MenuItemTypes.Button)
    const isHeader = computed(() => type.value === MenuItemTypes.Header)
    const isText = computed(() => type.value === MenuItemTypes.Text)
    const isDivider = computed(() => type.value === MenuItemTypes.Divider)
    const isRaw = computed(() => type.value === MenuItemTypes.Raw)

    const select = (): void => {
      if (['link', 'button', 'raw'].indexOf(type.value) >= 0) {
        emit('select')
      }
    }
    const focus = (): void => item.value?.focus()
    return {
      classes,
      isLink,
      isButton,
      isHeader,
      isText,
      isDivider,
      isRaw,
      item,
      select,
      focus,
    }
  },
})
</script>
