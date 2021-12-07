<template>
  <slot v-if="isActive" />
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeMount,
  toRefs,
} from 'vue'
import { UiTabPropsModel } from './models/ui-tabs-panel.model'

const TAG_NAME = 'uiTab'
export default defineComponent({
  TAG_NAME,

  props: {
    title: { type: String, required: true },
    active: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const { active, disabled } = toRefs(props)
    const instance: ComponentInternalInstance | null = getCurrentInstance()

    const state = inject('tabsState', {
      tabs: new Array<UiTabPropsModel>(),
      active: 0,
    })

    const index = computed(() =>
      state.tabs.findIndex(
        (target: UiTabPropsModel) => target.uid === instance?.uid
      )
    )

    const isActive = computed(() => index.value === state.active)

    onBeforeMount(() => {
      if (instance && index.value === -1) {
        const aux: UiTabPropsModel = {
          props: {
            title: String(instance.props.title),
            disabled: Boolean(instance.props.disabled),
          },
          uid: Number(instance.uid),
        }

        state.tabs.push(aux)
      }
      if (instance?.props.active && !instance?.props.disabled) {
        state.active = index.value
      }
    })

    return { isActive }
  },
})
</script>
