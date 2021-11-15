<template>
  <UiTransitionPersist
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div
      v-if="visible"
      :class="classes"
      :role="role"
      :aria-live="ariaLive"
      aria-atomic="true"
    >
      <div class="toast-header" v-if="!!headerText || slots.header">
        <slot v-if="slots.header" name="header" :headerText="headerText" />
        <strong class="me-auto" v-else-if="!!headerText">{{
          headerText
        }}</strong>
        <UiBtnClose
          v-if="dismissible"
          @close="close"
          :ariaLabel="ariaLabelCloseButton"
        />
      </div>
      <!-- IF no header but dissmissable -->
      <div v-if="dismissible && !(!!headerText || slots.header)" class="d-flex">
        <div class="toast-body">
          <slot v-if="slots.default" />
          <span
            v-else-if="!!message"
            class="me-auto"
            :class="bodyTextClasses"
            >{{ message }}</span
          >
        </div>
        <UiBtnClose
          class="me-2 m-auto"
          @close="close"
          :ariaLabel="ariaLabelCloseButton"
        />
      </div>
      <!-- IF only body -->
      <div class="toast-body" v-else>
        <slot v-if="slots.default" :item="props" />
        <span v-else-if="!!message" class="me-auto" :class="bodyTextClasses">{{
          message
        }}</span>
      </div>
    </div>
  </UiTransitionPersist>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
} from 'vue'
import { ContextualVariant, ContextualVariants } from '../../types'
import { ButtonCloseComponent } from '../../components/ButtonClose'
import { TransitionPersistComponent } from '../../components/TransitionPersist'

const className = 'toast'

export default defineComponent({
  TAG_NAME: className,
  components: {
    UiBtnClose: ButtonCloseComponent,
    UiTransitionPersist: TransitionPersistComponent,
  },
  props: {
    animate: {
      type: Boolean,
      default: true,
    },
    headerText: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    ariaLabelCloseButton: {
      type: String,
      default: 'Close',
    },
    ariaLive: {
      type: String,
      default: 'assertive',
    },
    role: {
      type: String,
      default: 'alert',
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    msTimer: {
      type: Number,
      required: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String as PropType<ContextualVariant>,
      default: null,
    },
  },
  emits: ['show', 'close'],
  setup(props, { emit, slots }) {
    const { show, variant, animate, msTimer } = toRefs(props)
    const remove = ref(false)
    const visible = computed(() => show.value && !remove.value)
    const classes = computed(() => [
      className,
      ...(variant.value ? [`bg-${variant.value}`] : []),
      ...(animate.value ? ['fade'] : []),
    ])
    const bodyTextClasses = computed(() => [
      ...(variant.value === ContextualVariants.Dark ? ['text-light'] : []),
    ])
    let timeoutInterval: number | null = null
    const close = () => {
      remove.value = true
      timeoutInterval && clearInterval(timeoutInterval)
    }
    const afterEnter = () => emit('show', !remove.value)
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('show', !remove.value)

    onMounted(() => {
      if ((msTimer?.value || 0) > 0) {
        timeoutInterval = setTimeout(() => close(), msTimer?.value)
      }
    })

    return {
      remove,
      visible,
      classes,
      bodyTextClasses,
      close,
      slots,
      afterEnter,
      beforeLeave,
      afterLeave,
      props,
    }
  },
})
</script>
