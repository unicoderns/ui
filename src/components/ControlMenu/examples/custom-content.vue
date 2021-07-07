<template>
  <div>
    <section>
      <UiDropdownMenu :datasource="datasource">
        <template #default="{ item }">
          <i>
            &#9917; <b>{{ item.content }}</b>
          </i>
        </template>
      </UiDropdownMenu>
    </section>
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
          type: 'text',
          content: 'Item 1',
        },
        {
          type: 'text',
          content: 'Item 2',
        },
        {
          type: 'text',
          content: 'Item 3',
        },
      ] as MenuItem[],
    }
  },
})
</script>
