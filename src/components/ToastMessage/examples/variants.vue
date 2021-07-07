<template>
  <div>
    <section>
      <UiBtn
        :variant="contextualVariants.Primary"
        @click="open({ headerText: null })"
      >
        Default toast
      </UiBtn>
      <UiBtn
        v-for="variant in contextualVariants"
        :key="variant"
        :variant="variant"
        @click="open({ variant, headerText: null })"
      >
        {{ variant }} toast
      </UiBtn>
    </section>
    <section>
      <h3>With Header</h3>
      <UiBtn :variant="contextualVariants.Primary" @click="open()">
        Default toast
      </UiBtn>
      <UiBtn
        v-for="variant in contextualVariants"
        :key="variant"
        :variant="variant"
        @click="open({ variant })"
      >
        {{ variant }} toast
      </UiBtn>
    </section>
    <section>
      <UiBtn
        :variant="contextualVariants.Success"
        @click="
          open({
            variant: contextualVariants.Success,
            animate: false,
            headerText: 'Non animated',
          })
        "
      >
        Animation Off
      </UiBtn>

      <UiBtn
        :variant="contextualVariants.Warning"
        @click="
          open({
            variant: contextualVariants.Warning,
            dismissible: false,
            headerText: 'Non Dismissable',
          })
        "
      >
        Non dismissable
      </UiBtn>

      <UiBtn
        :variant="contextualVariants.Danger"
        @click="
          open({
            variant: contextualVariants.Danger,
            msTimer: 3000,
            headerText: 'Timer 3s',
          })
        "
      >
        Timer 3s
      </UiBtn>

      <UiBtn
        :variant="contextualVariants.Secondary"
        @click="
          open({
            variant: contextualVariants.Secondary,
            msTimer: null,
            headerText: 'No timer',
          })
        "
      >
        No timer
      </UiBtn>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import {
  ContextualVariants,
  ToastMessagePlugin,
  ToastMessageService,
  ToastMessageModel,
  ButtonControlComponent,
} from '@/index'

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
    const toastService: ToastMessageService | undefined = inject(
      ToastMessagePlugin.ServiceInjectionToken
    )

    const open = (changes: ToastMessageModel = {}) => {
      const message: ToastMessageModel = {
        message: `Variant ${changes.variant}`,
        headerText: 'Some title',
        msTimer: 2000,
        dismissible: true,
        ...changes,
      }
      toastService?.add(message)
    }

    return {
      open,
    }
  },
})
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
