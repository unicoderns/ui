<template>
  <li :class="classes" :aria-current="active ? aria.currentPage : null">
    <a :class="theme.cssClass.link" @click="pageChange">
      {{ html }}
    </a>
  </li>
</template>

<script setup lang="ts">
import { computed, toRefs, useAttrs, withDefaults } from 'vue'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '@uicr/core'
import { uiPaginationThemeConfigDefaults } from './defaults/ui-pagination-theme.config'
import { uiPaginationAriaDefaults } from './defaults/ui-pagination-aria.config'
import { UiPaginationThemeConfigModel } from './models/ui-pagination-theme-config.model'
import { UiPaginationAriaConfigModel } from './models/ui-pagination-aria-config.model'

const TAG_NAME = 'uiPagination'
const attrs = useAttrs()

interface Props {
  active?: boolean
  disabled?: boolean
  html: string
  page: number | string
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  disabled: false,
})

const emit = defineEmits(['page-change'])

const { active, disabled, page } = toRefs(props)

const theme = useReactiveThemeConfig<UiPaginationThemeConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiPaginationThemeConfigDefaults
)

const aria = useReactiveAriaConfig<UiPaginationAriaConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiPaginationAriaDefaults
)

const classes = computed((): string[] => {
  return [
    theme.value.cssClass.item,
    active.value ? theme.value.cssClass.itemActive : '',
    disabled.value ? theme.value.cssClass.disabled : '',
  ]
})

const pageChange = () => {
  if (page.value === '...' || disabled.value || active.value) return
  emit('page-change')
}
</script>
