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
import { ToastMessageQueueService } from './toast-message-queue.service'
import { Position } from '../../types'
import { ToastMessageModel } from './models/toast-message.model'
import { ToastQueueModel } from './models/toast-queue.model'
import ToastMessageComponent from '../../components/ToastMessage/toast-message.component.vue'
import { useReactiveThemeConfig } from '../../utils'
import { ToastMessageThemeConfigModel } from './models/toast-message-theme-config.model'

const TAG_NAME = 'toast'
const TAG_NAME_CONTAINER = 'toastContainer'

interface PositionQueue {
  position: Position
  classes: string
  messages: ToastMessageModel[]
}

export default defineComponent({
  TAG_NAME: TAG_NAME_CONTAINER,
  components: {
    UiToast: ToastMessageComponent,
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

    const theme = useReactiveThemeConfig<ToastMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const filterPosition = (position: string) => ([, toast]: [
      string,
      ToastMessageModel
    ]) =>
      (toast.position || props.defaultPosition).toUpperCase() ===
      position.toUpperCase()

    const getQueueList = (queue: ToastQueueModel): PositionQueue[] =>
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

    watch(containerQueue, (queue: ToastQueueModel) => {
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
