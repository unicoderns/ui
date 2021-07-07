<template>
  <div class="toast-container position-absolute p-3 top-0">
    <slot></slot>
    <UiToast
      v-for="[key, toastElement] in queue"
      :key="key"
      v-bind="toastElement"
      @close="removeToast(key)"
    >
      <template v-if="slots?.toastHeader" #header="{ toastElement }">
        <slot :toastHeader="toastElement" />
      </template>
      <template v-if="slots?.toastBody" #default="{ toastElement }">
        <slot :toastBody="toastElement" />
      </template>
    </UiToast>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ToastMessageService } from './toast-message.service'
import ToastMessageComponent from '@/components/ToastMessage/toast-message.component.vue'

const className = 'toast'

export default defineComponent({
  TAG_NAME: className,
  components: {
    UiToast: ToastMessageComponent,
  },
  setup(props, { slots }) {
    const service = new ToastMessageService()

    const removeToast = (key: string) => {
      service.remove(key)
    }

    return {
      queue: service.queue,
      removeToast,
      service,
      slots,
    }
  },
})
</script>
