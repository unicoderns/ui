<template>
  <div>
    <section>
      <UiDropdown :datasource="datasource">
        <template #label>
          <span>Custom <b>label</b> &#9917;</span>
        </template>
      </UiDropdown>
    </section>
    <section>
      <UiDropdown :datasource="datasource" label="Custon template">
        <template #item="{ item }">
          <i>
            &#9917; <b>{{ item.content }}</b>
          </i>
        </template>
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
