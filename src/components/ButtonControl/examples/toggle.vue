<template>
  <div>
    <div class="bg-dark" v-for="variant in ContextualVariants" :key="variant">
      <UiBtn :variant="variant" :toggle="true">
        {{ variant }}
      </UiBtn>
      <UiBtn :variant="variant" :toggle="true" :active="true">
        {{ variant }} active
      </UiBtn>
      <UiBtn :variant="variant" :toggle="true" :outline="true">
        {{ variant }}
      </UiBtn>
      <UiBtn :variant="variant" :toggle="true" :outline="true" :active="true">
        {{ variant }} active
      </UiBtn>
    </div>
    <div>
      <p @click="activeState = !activeState">
        Toggle event (Click here to toggle from parent)
      </p>
      <UiBtn
        :variant="'primary'"
        :toggle="true"
        :outline="true"
        @toggle="toggle"
        :active="activeState"
      >
        {{ toggleText }}
      </UiBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { ButtonControlComponent, ContextualVariants } from '@/index'

export default defineComponent({
  components: {
    UiBtn: ButtonControlComponent,
  },
  data() {
    return {
      contextualVariants: { ...ContextualVariants },
    }
  },
  setup() {
    const toggleState = ref(false)
    const activeState = ref(false)

    const toggleText = computed((): string => {
      return toggleState.value ? 'Toggle Active' : 'Toggle Inactive'
    })

    const toggle = (value: boolean) => (toggleState.value = value)

    return {
      toggleState,
      activeState,
      toggleText,
      toggle,
    }
  },
})
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
