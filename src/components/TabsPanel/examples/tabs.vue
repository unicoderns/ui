<template>
  <div>
    <section>
      <UiTabs>
        <UiTab title="Tab 1">
          Hello From Tab 1
        </UiTab>
        <UiTab title="Tab 2" active="true">
          Hello From Tab 2
        </UiTab>
        <UiTab title="Tab 3" active="true">
          Hello From Tab 3
        </UiTab>
      </UiTabs>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { TabsPanelComponent, TabComponent } from '@/index'

export default defineComponent({
  components: {
    UiTabs: TabsPanelComponent,
    UiTab: TabComponent,
  },
})
</script>
