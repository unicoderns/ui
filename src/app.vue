<template>
  <div class="container">
    <div class="menu">
      <UiControlMenu :datasource="menuItems" @select="select($event)" />
    </div>
    <div class="content">
      <component :is="selectedComponentKey" v-if="!!selectedComponentKey" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, Component } from 'vue'
import { ControlMenuComponent, MenuItem } from './index'
import { MenuItemTypes } from './types'

const cmpName = (index: number) => 'cmp0' + (index < 10 ? '0' : '') + index
const menuItems: MenuItem[] = [
  { type: MenuItemTypes.Header, content: 'Alert Message' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/AlertMessage/examples/variants.vue',
    },
    content: 'variants',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/AlertMessage/examples/dismissible.vue',
    },
    content: 'dismissible',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/AlertMessage/examples/animate.vue',
    },
    content: 'animate',
  },
  { type: MenuItemTypes.Header, content: 'Button Close' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ButtonClose/examples/variants.vue',
    },
    content: 'variants',
  },
  { type: MenuItemTypes.Header, content: 'Buttons' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ButtonControl/examples/variants.vue',
    },
    content: 'variants',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ButtonControl/examples/outline.vue',
    },
    content: 'outline',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ButtonControl/examples/toggle.vue',
    },
    content: 'toggle',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ButtonControl/examples/size.vue',
    },
    content: 'size',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ButtonControl/examples/anchor.vue',
    },
    content: 'anchor',
  },
  { type: MenuItemTypes.Header, content: 'Dropdown' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlDropdown/examples/variants.vue',
    },
    content: 'variants',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlDropdown/examples/variants.vue',
    },
    content: 'custom template',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlDropdown/examples/arrow.vue',
    },
    content: 'arrow direction',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlDropdown/examples/default-index.vue',
    },
    content: 'default selected index',
  },
  { type: MenuItemTypes.Header, content: 'Menu' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlMenu/examples/variants.vue',
    },
    content: 'variants',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlMenu/examples/custom-content.vue',
    },
    content: 'custom template',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ControlMenu/examples/default-index.vue',
    },
    content: 'default selected index',
  },
  { type: MenuItemTypes.Header, content: 'Toast' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/ToastMessage/examples/variants.vue',
    },
    content: 'variants',
  },
  { type: MenuItemTypes.Header, content: 'Tabs Panel' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/TabsPanel/examples/tabs.vue',
    },
    content: 'Default index',
  },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/TabsPanel/examples/disabled-tab.vue',
    },
    content: 'Disabled tab',
  },
  { type: MenuItemTypes.Header, content: 'Tooltip' },
  {
    type: MenuItemTypes.Button,
    elementAttrs: {
      title: '@/components/Tooltip/examples/tooltip.vue',
    },
    content: 'Default',
  },
]
const components: Record<string, Component> = {}
menuItems
  .filter(item => item.type === MenuItemTypes.Button)
  .map(item => {
    const { elementAttrs } = item as any
    elementAttrs.cmpName = cmpName(Object.keys(components).length + 1)
    components[elementAttrs.cmpName] = defineAsyncComponent(() =>
      import(elementAttrs.title)
    )
  })

export default defineComponent({
  components: {
    UiControlMenu: ControlMenuComponent,
    // ...components,
    cmp001: defineAsyncComponent(() =>
      import('@/components/AlertMessage/examples/variants.vue')
    ),
    cmp002: defineAsyncComponent(() =>
      import('@/components/AlertMessage/examples/dismissible.vue')
    ),
    cmp003: defineAsyncComponent(() =>
      import('@/components/AlertMessage/examples/animate.vue')
    ),
    cmp004: defineAsyncComponent(() =>
      import('@/components/ButtonClose/examples/variants.vue')
    ),
    cmp005: defineAsyncComponent(() =>
      import('@/components/ButtonControl/examples/variants.vue')
    ),
    cmp006: defineAsyncComponent(() =>
      import('@/components/ButtonControl/examples/outline.vue')
    ),
    cmp007: defineAsyncComponent(() =>
      import('@/components/ButtonControl/examples/toggle.vue')
    ),
    cmp008: defineAsyncComponent(() =>
      import('@/components/ButtonControl/examples/size.vue')
    ),
    cmp009: defineAsyncComponent(() =>
      import('@/components/ButtonControl/examples/anchor.vue')
    ),
    cmp010: defineAsyncComponent(() =>
      import('@/components/ControlDropdown/examples/variants.vue')
    ),
    cmp011: defineAsyncComponent(() =>
      import('@/components/ControlDropdown/examples/custom-content.vue')
    ),
    cmp012: defineAsyncComponent(() =>
      import('@/components/ControlDropdown/examples/arrow.vue')
    ),
    cmp013: defineAsyncComponent(() =>
      import('@/components/ControlDropdown/examples/default-index.vue')
    ),
    cmp014: defineAsyncComponent(() =>
      import('@/components/ControlMenu/examples/variants.vue')
    ),
    cmp015: defineAsyncComponent(() =>
      import('@/components/ControlMenu/examples/custom-content.vue')
    ),
    cmp016: defineAsyncComponent(() =>
      import('@/components/ControlMenu/examples/default-index.vue')
    ),
    cmp017: defineAsyncComponent(() =>
      import('@/components/ToastMessage/examples/variants.vue')
    ),
    cmp018: defineAsyncComponent(() =>
      import('@/components/TabsPanel/examples/tabs.vue')
    ),
    cmp019: defineAsyncComponent(() =>
      import('@/components/TabsPanel/examples/disabled-tab.vue')
    ),
    cmp020: defineAsyncComponent(() =>
      import('@/components/Tooltip/examples/tooltip.vue')
    ),
  },
  data() {
    return {
      keys: Object.keys(components),
      menuItems,
      selectedComponentKey: '',
    }
  },
  methods: {
    select(item: MenuItem) {
      const { cmpName } = (item as any).elementAttrs
      this.selectedComponentKey = cmpName
    },
  },
})
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
}

.menu {
  order: 0;
  flex: 0 1 30%;
  align-self: auto;
}

.content {
  order: 0;
  flex: 1 1 auto;
  align-self: auto;
}
section {
  padding: 10px;
}
</style>
