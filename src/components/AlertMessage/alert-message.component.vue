<template>
  <UiTransitionPersist
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div v-if="visible" :class="classes" role="alert">
      <slot></slot>
      <UiBtnClose
        v-if="dismissible"
        @close="close"
        :ariaLabel="ariaLabelCloseButton"
      />
    </div>
  </UiTransitionPersist>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import { ContextualVariant } from '@/types/contextual-variant'
import { cssClassPrefix } from '@/utils'
import { ButtonCloseComponent } from '@/components/ButtonClose'
import { TransitionPersistComponent } from '@/components/TransitionPersist'

const className = 'alert'
const classPrefix = cssClassPrefix(className)

export default defineComponent({
  TAG_NAME: className,
  components: {
    UiBtnClose: ButtonCloseComponent,
    UiTransitionPersist: TransitionPersistComponent,
  },
  props: {
    animate: {
      type: Boolean,
      default: false,
    },
    ariaLabelCloseButton: {
      type: String,
      default: 'Close',
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String as PropType<ContextualVariant>,
      required: true,
    },
  },
  emits: ['show', 'close'],
  setup(props, { emit }) {
    const { show, variant, dismissible, animate } = toRefs(props)
    const remove = ref(false)
    const visible = computed(() => show.value && !remove.value)
    const classes = computed(() => [
      className,
      ...(variant.value ? [`${classPrefix}${variant.value}`] : []),
      ...(dismissible.value ? [`${classPrefix}dismissible`] : []),
      ...(animate.value ? ['fade'] : []),
    ])

    const close = () => (remove.value = true)
    const afterEnter = () => emit('show', !remove.value)
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('show', !remove.value)

    return {
      remove,
      visible,
      classes,
      close,
      afterEnter,
      beforeLeave,
      afterLeave,
    }
  },
})

//   // TODO htmlElem dismiss, close, etc
//   // TODO 2 way binding
// }
</script>
