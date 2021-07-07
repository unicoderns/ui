<template>
  <div>
    <section>
      <UiDropdown
        :datasource="datasource"
        label="Default Selected Index"
        :defaultSelectedIndex="1"
      >
      </UiDropdown>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ControlDropdownComponent, MenuItem } from '@/index'

export default defineComponent({
  components: {
    UiDropdown: ControlDropdownComponent,
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
