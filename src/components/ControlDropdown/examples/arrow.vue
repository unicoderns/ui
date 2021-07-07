<template>
  <div>
    <section>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Left"
        arrowDirection="left"
      >
      </UiDropdown>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Left Split"
        arrowDirection="left"
        :splitButton="true"
      >
      </UiDropdown>
    </section>
    <section>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Right"
        arrowDirection="right"
      >
      </UiDropdown>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Right Split"
        arrowDirection="right"
        :splitButton="true"
      >
      </UiDropdown>
    </section>
    <section>
      <UiDropdown :datasource="datasource" label="Arrow Up" arrowDirection="up">
      </UiDropdown>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Up Split"
        arrowDirection="up"
        :splitButton="true"
      >
      </UiDropdown>
    </section>
    <section>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Down"
        arrowDirection="down"
      >
      </UiDropdown>
      <UiDropdown
        :datasource="datasource"
        label="Arrow Down Split"
        arrowDirection="down"
        :splitButton="true"
      >
      </UiDropdown>
    </section>
    <section>TODO: Menu Aligned</section>
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
<style scoped>
.dropdown {
  margin-right: 20px;
}
</style>

