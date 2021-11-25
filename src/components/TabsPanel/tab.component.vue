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
import { TabPropsModel } from './models/tabs-panel.model'

const className = 'UiTab'
export default defineComponent({
  TAG_NAME: className,
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean, //TODO: Boolean
      required: false,
    },
    disabled: {
      type: Boolean, //TODO: Boolean
      required: false,
    },
  },

  setup(props) {
    const { active, disabled } = toRefs(props)
    const instance: ComponentInternalInstance | null = getCurrentInstance()

    const state = inject('tabsState', {
      tabs: new Array<TabPropsModel>(),
      active: 0,
    })

    const index = computed(() =>
      state.tabs.findIndex(
        (target: TabPropsModel) => target.uid === instance?.uid
      )
    )

    const isActive = computed(() => index.value === state.active)

    onBeforeMount(() => {
      if (instance && index.value === -1) {
        const aux: TabPropsModel = {
          props: {
            title: String(instance.props.title),
            disabled: Boolean(instance.props.disabled),
          },
          uid: Number(instance.uid),
        }

        state.tabs.push(aux)
      }
      if (active && !disabled) {
        state.active = index.value
      }
    })

    return { isActive }
  },
})
</script>
