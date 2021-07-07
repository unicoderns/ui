<template>
  <div>
    <section>
      <UiDropdownMenu :datasource="datasource">
        <template v-slot:default="slotProps">{{
          slotProps.item.content
        }}</template>
      </UiDropdownMenu>
    </section>
    <section class="bg-dark">
      <UiDropdownMenu :datasource="datasource" :invert="true">
        <template v-slot:default="slotProps">{{
          slotProps.item.content
        }}</template>
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
