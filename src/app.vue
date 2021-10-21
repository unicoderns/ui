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

[tooltip] {
  position: relative;
  /* position: TOP */
  /* position: BOTTOM */
  /* position: LEFT */
  /* position: RIGHT */
  /* FX All The Things */
}
[tooltip] > * {
  display: inline-block;
}
[tooltip]:before,
[tooltip]:after {
  text-transform: none;
  /* opinion 2 */
  font-size: 0.9em;
  /* opinion 3 */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]:before {
  content: '';
  border: 5px solid transparent;
  /* opinion 4 */
  z-index: 1001;
  /* absurdity 1 */
}
[tooltip]:after {
  content: attr(tooltip);
  /* magic! */
  /* most of the rest of this is opinion */
  font-family: Helvetica, sans-serif;
  text-align: center;
  /* Let the content set the size of the tooltips but this will also keep them from being obnoxious */
  min-width: 3em;
  max-width: 21em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
  background: #495057;
  color: #fff;
  z-index: 1000;
  /* absurdity 2 */
}
[tooltip]:hover:before,
[tooltip]:hover:after {
  display: block;
}
[tooltip]:not([position]):before,
[tooltip][position^='top']:before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #495057;
}
[tooltip]:not([position]):after,
[tooltip][position^='top']::after {
  bottom: calc(100% + 5px);
}
[tooltip]:not([position])::before,
[tooltip]:not([position])::after,
[tooltip][position^='top']::before,
[tooltip][position^='top']::after {
  left: 50%;
  transform: translate(-50%, -0.5em);
}
[tooltip][position^='bottom']::before {
  top: 105%;
  border-top-width: 0;
  border-bottom-color: #495057;
}
[tooltip][position^='bottom']::after {
  top: calc(105% + 5px);
}
[tooltip][position^='bottom']::before,
[tooltip][position^='bottom']::after {
  left: 50%;
  transform: translate(-50%, 0.5em);
}
[tooltip][position^='left']::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #495057;
  left: calc(0em - 5px);
  transform: translate(-0.5em, -50%);
}
[tooltip][position^='left']::after {
  top: 50%;
  right: calc(100% + 5px);
  transform: translate(-0.5em, -50%);
}
[tooltip][position^='right']::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #495057;
  right: calc(0em - 5px);
  transform: translate(0.5em, -50%);
}
[tooltip][position^='right']::after {
  top: 50%;
  left: calc(100% + 5px);
  transform: translate(0.5em, -50%);
}
[tooltip]:not([position]):hover::before,
[tooltip]:not([position]):hover::after,
[tooltip][position^='top']:hover::before,
[tooltip][position^='top']:hover::after,
[tooltip][position^='bottom']:hover::before,
[tooltip][position^='bottom']:hover::after {
  animation: tooltips-vert 300ms ease-out forwards;
}
[tooltip][position^='left']:hover::before,
[tooltip][position^='left']:hover::after,
[tooltip][position^='right']:hover::before,
[tooltip][position^='right']:hover::after {
  animation: tooltips-horz 300ms ease-out forwards;
}
/* don't show empty tooltips */
[tooltip='']::before,
[tooltip='']::after {
  display: none !important;
}
/* KEYFRAMES */
@keyframes tooltips-vert {
  to {
    opacity: 0.9;
    transform: translate(-50%, 0);
  }
}
@keyframes tooltips-horz {
  to {
    opacity: 0.9;
    transform: translate(0, -50%);
  }
}
</style>
