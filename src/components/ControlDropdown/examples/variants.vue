<template>
  <div>
    <section>
      <UiDropdown
        v-for="variant in contextualVariants"
        :key="variant"
        :variant="variant"
        :datasource="datasource"
        :label="variant"
      >
      </UiDropdown>
    </section>
    <section>
      <UiDropdown
        v-for="variant in contextualVariants"
        :key="variant"
        :variant="variant"
        :datasource="datasource"
        :label="variant"
        :outline="true"
      >
      </UiDropdown>
    </section>
    <section>
      <UiDropdown :datasource="datasource" label="Anchor tag" :anchor="true">
      </UiDropdown>
    </section>
    <section>
      <UiDropdown :datasource="datasource" label="Small" size="sm">
      </UiDropdown>
      <UiDropdown :datasource="datasource" label="Normal"> </UiDropdown>
      <UiDropdown :datasource="datasource" label="Large" size="lg">
      </UiDropdown>
    </section>
    <section class="bg-dark">
      <UiDropdown
        :datasource="datasource"
        :invert="true"
        variant="light"
        label="Dark menu"
      >
      </UiDropdown>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ControlDropdownComponent, MenuItem, ContextualVariants } from '@/index'

export default defineComponent({
  components: {
    UiDropdown: ControlDropdownComponent,
  },
  data() {
    return {
      contextualVariants: { ...ContextualVariants },
      datasource: [
        {
          type: 'header',
          content: 'This is a header item',
        },
        {
          type: 'text',
          content: 'This is a text item',
        },
        {
          type: 'divider',
        },
        {
          type: 'link',
          elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
          content: 'This is a link item',
        },
        {
          type: 'button',
          content: 'This is a button item',
        },
        {
          type: 'divider',
        },
        {
          type: 'link',
          elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
          content: 'This is an active link item',
          active: true,
        },
        {
          type: 'button',
          content: 'This is an active button item',
          active: true,
        },
        {
          type: 'divider',
        },
        {
          type: 'link',
          elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
          content: 'This is a disabled link item',
          disabled: true,
        },
        {
          type: 'button',
          content: 'This is a disabled button item',
          disabled: true,
        },
        {
          type: 'Raw',
          content: 'This is a raw item',
        },
      ] as MenuItem[],
    }
  },
})
</script>
<style scoped>
.dropdown {
  margin-right: 10px;
}
</style>
