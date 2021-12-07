<template>
  <ul :class="theme.cssClass.main">
    <li
      v-for="(tab, index) in tabsState.tabs"
      :key="index"
      :class="theme.cssClass.item"
    >
      <a
        :class="
          `${theme.cssClass.link}
          ${tabsState.active === index ? theme.cssClass.itemActive : ''}
          ${tab.props.disabled === true ? theme.cssClass.itemDisabled : ''}`
        "
        @click="select(index)"
        :aria-current="tabsState.active === index ? aria.currentPage : null"
        :role="aria.role"
      >
        {{ tab.props.title }}
      </a>
    </li>
  </ul>
  <slot />
</template>

<script lang="ts">
import { defineComponent, reactive, provide } from 'vue'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '@unicodernsui/core'
import { TabPropsModel } from './models/tabs-panel.model'
import { bsTabsPanelThemeConfigDefaults } from './defaults/bs-tabs-panel-theme.config'
import { TabsPanelAriaConfigModel } from './models/tabs-panel-accessibility-config.model'
import { tabsPanelAriaDefaults } from './defaults/tabs-panel-accessibility.config'
import { TabsPanelThemeConfigModel } from './models/tabs-panel-theme-config.model'

const TAG_NAME = 'uiTabs'
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
      emit('select')
    }

    const theme = useReactiveThemeConfig<TabsPanelThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsTabsPanelThemeConfigDefaults
    )

    const aria = useReactiveAriaConfig<TabsPanelAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      tabsPanelAriaDefaults
    )

    return { tabsState, theme, aria, select }
  },
})
</script>
