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
import { UiTabPropsModel } from './models/ui-tabs-props.model'
import { uiTabsPanelThemeConfigDefaults } from './defaults/ui-tabs-panel-theme.config'
import { UiTabsPanelAriaConfigModel } from './models/ui-tabs-panel-aria-config.model'
import { UiTabsPanelAriaDefaults } from './defaults/ui-tabs-panel-aria.config'
import { UiTabsPanelThemeConfigModel } from './models/ui-tabs-panel-theme-config.model'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '@uicr/core'

const TAG_NAME = 'uiTabs'
export default defineComponent({
  TAG_NAME,
  emits: ['select'],
  setup(props, { emit, attrs }) {
    const tabsState = reactive({
      tabs: new Array<UiTabPropsModel>(),
      active: 0,
    })
    provide('uiTabsState', tabsState)

    const select = (index: number): void => {
      tabsState.active = index
      emit('select', index)
    }

    const theme = useReactiveThemeConfig<UiTabsPanelThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiTabsPanelThemeConfigDefaults
    )

    const aria = useReactiveAriaConfig<UiTabsPanelAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      UiTabsPanelAriaDefaults
    )

    return { tabsState, theme, aria, select }
  },
})
</script>
