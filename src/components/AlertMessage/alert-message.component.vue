<template>
  <UiTransitionPersist
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div v-if="visible" :class="classes" :role="aria.role">
      <slot></slot>
      <UiBtnClose
        v-if="dismissible"
        :class="theme.cssClass.components.buttonClose"
        :aria:label="aria.buttonClose"
        @close="close"
      />
    </div>
  </UiTransitionPersist>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
import { ButtonCloseComponent } from '../../components/ButtonClose'
import { TransitionPersistComponent } from '../../components/TransitionPersist'
import { getReactiveAriaConfig, getReactiveThemeConfig } from '../../utils'
import { AlertMessageThemeConfigModel } from './models/alert-message-theme-config.model'
import { AlertMessageAccessibilityConfigModel } from './models/alert-message-accessibility-config.model'

const TAG_NAME = 'alertMessage'

export default defineComponent({
  TAG_NAME,
  components: {
    UiBtnClose: ButtonCloseComponent,
    UiTransitionPersist: TransitionPersistComponent,
  },
  props: {
    animate: { type: Boolean, default: false },
    dismissible: { type: Boolean, default: false },
    show: { type: Boolean, default: true },
    variant: { type: String, required: true },
    ['aria:role']: { type: String, default: null },
    ['aria:buttonClose']: { type: String, default: null },
  },
  emits: ['show', 'hide', 'close'],
  setup(props, { emit, attrs }) {
    const { animate, dismissible, show, variant, ...extraProps } = toRefs(props)
    const remove = ref(false)
    const visible = computed(() => show.value && !remove.value)

    const theme = getReactiveThemeConfig<AlertMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const aria = getReactiveAriaConfig<AlertMessageAccessibilityConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const classes = computed(() => [
      theme.value.cssClass.main,
      ...(variant.value
        ? [theme.value.cssClass.variants[variant.value]]
        : []),
      ...(dismissible.value ? [theme.value.cssClass.dismissible] : []),
      ...(animate.value ? [theme.value.cssClass.animated] : []),
    ])

    const close = () => (remove.value = true)
    const afterEnter = () => emit('show')
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('hide')

    return {
      remove,
      visible,
      classes,
      theme,
      aria,
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
