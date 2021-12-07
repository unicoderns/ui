<template>
  <div :class="theme.cssClass.container" :queueId="containerQueue.key">
    <div
      v-for="queue in queueList"
      :class="queue.classes"
      :key="queue.position"
    >
      <UiToast
        v-for="[key, toastElement] in queue.messages"
        :key="key"
        v-bind="toastElement"
        @close="removeToast(key)"
      >
        <template v-if="slots.toastHeader" #header="{ item }">
          <slot name="toastHeader" :item="item" />
        </template>
        <template v-if="slots.toastBody" #default="{ item }">
          <slot name="toastBody" :item="item" />
        </template>
      </UiToast>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, PropType, ref, watch } from 'vue'
import { Position, useReactiveThemeConfig } from '@unicodernsui/core'
import { bsUiToastThemeConfigDefaults } from './defaults/bs-ui-toast-theme.config'
import { UiToastQueueModel } from './models/ui-toast-queue.model'
import { ToastMessageQueueService } from './toast-message-queue.service'
import { UiToastModel } from './models/ui-toast.model'
import { UiToastThemeConfigModel } from './models/ui-toast-theme-config.model'
import UiToast from './ui-toast-message.component.vue'

const TAG_NAME = 'uiToast'
const TAG_NAME_CONTAINER = 'uiToast'

interface PositionQueue {
  position: Position
  classes: string
  messages: [string, UiToastModel][]
}

export default defineComponent({
  TAG_NAME: TAG_NAME_CONTAINER,
  components: {
    UiToast,
  },
  props: {
    defaultPosition: { type: String as PropType<Position>, default: null },
  },
  setup(props, { slots, attrs }) {
    const toastService =
      ToastMessageQueueService.singletonInstance ||
      new ToastMessageQueueService()

    const containerQueue = toastService.register()

    const removeToast = (key: string) => {
      toastService.remove(key)
    }

    const theme = useReactiveThemeConfig<UiToastThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiToastThemeConfigDefaults
    )

    const filterPosition = (position: string) => ([, toast]: [
      string,
      UiToastModel
    ]) =>
      (toast.position || props.defaultPosition).toUpperCase() ===
      position.toUpperCase()

    const getQueueList = (queue: UiToastQueueModel): PositionQueue[] =>
      Object.entries(theme.value.cssClass.positions)
        .map(
          ([position, classes]) =>
            ({
              position,
              classes,
              messages: queue.messages.filter(filterPosition(position)),
            } as PositionQueue)
        )
        .filter(({ messages }) => messages.length > 0)

    const queueList = ref(getQueueList(containerQueue.value) as PositionQueue[])

    watch(containerQueue, (queue: UiToastQueueModel) => {
      queueList.value = getQueueList(queue)
    })

    onUnmounted(() => {
      toastService.unregister(containerQueue)
    })

    return {
      containerQueue,
      queueList,
      slots,
      service: toastService,
      theme,
      removeToast,
    }
  },
})
</script>

<style scoped>
.ui-toast-container {
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>
