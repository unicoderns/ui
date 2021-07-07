<template>
  <div>
    <a @click="toggleAlert"
      >Click here to show/hide alert
      <small>(animation slowed on purpose)</small></a
    >
    <UiAlert
      :variant="variant"
      :dismissible="true"
      :animate="true"
      :show="show"
    >
      I'm animated
    </UiAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ContextualVariants, AlertMessageComponent } from '@/index'

export default defineComponent({
  components: {
    UiAlert: AlertMessageComponent,
  },
  data() {
    return {
      variant: ContextualVariants.Dark,
      show: false,
    }
  },
  methods: {
    toggleAlert(): void {
      this.show = !this.show
    },
  },
})
</script>

<style scoped>
.fade {
  transition: opacity 3s linear !important;
}
</style>
