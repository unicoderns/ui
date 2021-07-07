<template>
  <div>
    <UiDropdownMenu :datasource="datasource" :defaultSelectedIndex="1">
    </UiDropdownMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ControlMenuComponent, MenuItem } from '@/index'

export default defineComponent({
  components: {
    UiDropdownMenu: ControlMenuComponent,
  },
  data() {
    return {
      datasource: [
        {
          type: 'link',
          content: 'Item 1',
        },
        {
          type: 'link',
          content: 'Item 2',
        },
        {
          type: 'link',
          content: 'Item 3',
        },
      ] as MenuItem[],
    }
  },
})
</script>
<style scoped>
ul.dropdown-menu {
  display: block;
  position: static;
}
</style>
