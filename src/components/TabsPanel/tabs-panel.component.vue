<template>
  <ul class="nav nav-tabs">
    <li v-for="(tab, index) in tabsState.tabs" :key="index" class="nav-item">
      <a
        class="nav-link"
        :class="{
          active: tabsState.active === index,
          disabled: tab.props.disabled === 'true',
        }"
        @click="tabsState.active = index"
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

const className = 'UiTabs'
export default defineComponent({
  TAG_NAME: className,
  setup() {
    const tabsState = reactive({
      tabs: new Array<TabPropsModel>(),
      active: 0,
    })
    provide('tabsState', tabsState)

    return { tabsState }
  },
})
</script>
