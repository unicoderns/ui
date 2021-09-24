<template>
  <slot v-if="isActive" />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeMount,
  toRefs,
} from 'vue'

interface TabProps {
  props: {
    title: string
  }
  type: {
    TAG_NAME: string
  }
  uid: number
}

interface TabsState {
  tabs: Array<TabProps>
  active: number
}

const className = 'UiTab'
export default defineComponent({
  TAG_NAME: className,
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      required: false,
    },
    disabled: {
      type: String,
      required: false,
    },
  },

  setup(props) {
    const { active, disabled } = toRefs(props)
    const instance = getCurrentInstance()

    const state: TabsState = inject('tabsState') as TabsState

    const index = computed(() =>
      state.tabs.findIndex((target: TabProps) => target.uid === instance?.uid)
    )

    const isActive = computed(() => index.value === state.active)

    onBeforeMount(() => {
      if (instance && index.value === -1) {
        const aux = (instance as unknown) as TabProps

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
