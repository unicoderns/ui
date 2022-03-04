<template>
  <nav :aria:label="aria.label">
    <ul :class="classes">
      <ui-pagination-item
        v-for="(item, index) in items"
        :key="index"
        :page="item.pageNum"
        :html="item.html"
        :active="item.active"
        :disabled="item.disabled"
        @page-change="$emit('page-change', item.pageNum)"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, toRefs, useAttrs, watch, withDefaults } from 'vue'
import {
  SizeVariants,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@uicr/core'
import { uiPaginationThemeConfigDefaults } from './defaults/ui-pagination-theme.config'
import { uiPaginationAriaDefaults } from './defaults/ui-pagination-aria.config'
import { UiPaginationThemeConfigModel } from './models/ui-pagination-theme-config.model'
import { UiPaginationAriaConfigModel } from './models/ui-pagination-aria-config.model'

const TAG_NAME = 'uiPagination'

interface Props {
  page?: number
  totalItems: number
  itemsPerPage?: number
  maxVisiblePages?: number
  size?: SizeVariants.Medium
  ['aria:label']?: string
}

const props = withDefaults(defineProps<Props>(), {
  page: 0,
  itemsPerPage: 10,
  maxVisiblePages: 3,
  size: SizeVariants.Medium,
  ['aria:label']: '',
})

const emit = defineEmits(['page-change', 'range-change'])
const attrs = useAttrs()
const { itemsPerPage, maxVisiblePages, page, size, totalItems } = toRefs(props)

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
  const sizeClass = theme.value.cssClass.sizes[size.value]

  return [theme.value.cssClass.main, ...(size.value ? [sizeClass] : [])]
})

const start = computed((): number => page.value * itemsPerPage.value)

const end = computed((): number => {
  const end = start.value + itemsPerPage.value

  return totalItems.value < end ? totalItems.value : end
})

const totalPagesCount = computed((): number => {
  if (itemsPerPage.value === 0) return 0

  const chunks = new Array(
    Math.floor(totalItems.value / itemsPerPage.value)
  ).fill(itemsPerPage.value)

  const remainder = totalItems.value % itemsPerPage.value

  if (remainder > 0) chunks.push(remainder)

  return chunks.length
})

const filteredPages = computed(() => {
  const diff = maxVisiblePages.value / 2
  const trimmedPages = Array.from(Array(totalPagesCount.value).keys()).slice(
    2,
    -2
  )

  if (trimmedPages.length > maxVisiblePages.value) {
    const diffFirst = page.value - trimmedPages[0]
    const diffLast = page.value - trimmedPages[trimmedPages.length - 1]

    if (diffFirst < diff) {
      return trimmedPages.slice(0, maxVisiblePages.value)
    } else if (diffLast >= -diff) {
      return trimmedPages.slice(-maxVisiblePages.value)
    } else {
      return trimmedPages.filter(p => {
        const diffPage = page.value - p
        return diffPage < 0 ? Math.abs(diffPage) <= diff : diffPage < diff
      })
    }
  }

  return null
})

const pages = computed(() => {
  const pages = filteredPages.value
    ? [
        filteredPages.value[0] - 1 === 1 ? 1 : '...',
        ...filteredPages.value,
        filteredPages.value[filteredPages.value.length - 1] + 1 ===
        totalPagesCount.value - 2
          ? totalPagesCount.value - 2
          : '...',
      ]
    : [...Array(totalPagesCount.value - 2).keys()].map(p => p + 1)

  return [
    page.value - 1,
    0,
    ...pages,
    totalPagesCount.value - 1,
    page.value + 1,
  ]
})

const html = (p: any, key: number) => {
  if (key === 0) {
    return 'Previous'
  }
  if (key === pages.value.length - 1) {
    return 'Next'
  }
  if (p === '...') {
    return p
  }
  return p + 1 + ''
}

const disabled = (p: number | string, key: number) => {
  return (
    (key === 0 && page.value === 0) ||
    (key === pages.value.length - 1 &&
      page.value === totalPagesCount.value - 1) ||
    p === '...'
  )
}

const items = computed(() => {
  return pages.value.map((p, key) => {
    return {
      active: p === page.value,
      disabled: disabled(p, key),
      html: html(p, key),
      pageNum: p,
    }
  })
})

const rangeChange = () => {
  if (page.value >= totalPagesCount.value && totalPagesCount.value !== 0) {
    emit('page-change', totalPagesCount.value - 1)
  } else {
    emit('range-change', start.value, end.value)
  }
}

const pageChange = (p: number) => {
  if (p >= totalPagesCount.value && p !== 0 && totalPagesCount.value !== 0) {
    throw new Error('page may be maximum the total number of pages minus one')
  }

  rangeChange()
}

watch(page, page => {
  pageChange(page)
})

watch(itemsPerPage, () => {
  rangeChange()
})

watch(totalItems, () => {
  rangeChange()
})
</script>
