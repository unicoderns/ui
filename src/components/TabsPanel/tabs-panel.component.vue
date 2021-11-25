<template>
  <ul :class="theme.cssClass.main">
    <li
      v-for="(tab, index) in tabsState.tabs"
      :key="index"
      :class="theme.cssClass.item"
    >
      <a
        :class="
          `${theme.cssClass.link} + ${
            tabsState.active === index ? theme.cssClass.itemActive : ''
          } + ${tab.props.disabled === true ? theme.cssClass.itemDisabled : ''}`
        "
        @click="select(index)"
        aria-current="page"
      >
        {{ tab.props.title }}
      </a>
    </li>
  </ul>
  <slot />
</template>

<script lang="ts">
import { defineComponent, reactive, provide } from 'vue'
import { TabPropsModel } from './models/tabs-panel.model'
import { getReactiveThemeConfig } from '../../utils'
import { TabsPanelThemeConfigModel } from './models/tabs-panel-theme-config.model'

const TAG_NAME = 'tabsPanel'
export default defineComponent({
  TAG_NAME,
  emits: ['select'],
  setup(props, { emit, attrs }) {
    const tabsState = reactive({
      tabs: new Array<TabPropsModel>(),
      active: 0,
    })
    provide('tabsState', tabsState)

    const select = (index: number): void => {
      tabsState.active = index
      emit('select', index)
    }

    const theme = getReactiveThemeConfig<TabsPanelThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    return { tabsState, theme, select }
  },
})
</script>
