<template>
  <UiTransition
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div
      v-if="visible"
      :class="classes"
      :role="aria.role"
      :aria-labelledby="aria.title"
      :aria-describedby="aria.description"
      :tabindex="autoFocus ? 0 : -1"
      ref="main"
      style="display: block"
      @click="close('backdrop')"
      @keydown.esc="close('esc')"
    >
      <div :class="wrapperClasses" @click.stop="">
        <div :class="theme.cssClass.content">
          <div :class="theme.cssClass.header">
            <component
              :is="theme.tags.title"
              :class="theme.cssClass.headerTitle"
            >
              <span v-if="!!title">{{ title }}</span>
              <slot v-else-if="slots.title" name="title" />
            </component>
            <UiButtonClose
              :class="theme.cssClass.components.buttonClose"
              v-if="dismissible"
              @close="close"
              :aria:label="aria.buttonClose"
            />
          </div>
          <div :class="theme.cssClass.body">
            <span v-if="!!body">{{ body }}</span>
            <slot v-else-if="slots.body" name="body" />
          </div>
          <div :class="theme.cssClass.footer" v-if="slots.footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </UiTransition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue'
import {
  ModalSizeVariant,
  ResponsiveVariant,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { UiButtonClose } from '@unicodernsui/button-close'
import { UiTransition } from '@unicodernsui/transition'
import { bsUiModalThemeConfigDefaults } from './defaults/bs-ui-modal-theme.config'
import { UiModalAriaConfigModel } from './models/ui-modal-aria-config.model'
import { uiModalAriaDefaults } from './defaults/ui-modal-aria.config'
import { UiModalThemeConfigModel } from './models/ui-modal-theme-config.model'

const TAG_NAME = 'uiModal'

export default defineComponent({
  TAG_NAME,
  components: {
    UiButtonClose,
    UiTransition,
  },
  props: {
    title: { type: String, default: null },
    body: { type: String, default: null },
    animate: { type: Boolean, default: true },
    dismissible: { type: Boolean, default: false },
    disableBackdrop: { type: Boolean, default: false },
    disableEscKey: { type: Boolean, default: false },
    autoFocus: { type: Boolean, default: true },
    scrollable: { type: Boolean, default: false },
    verticalCenter: { type: Boolean, default: false },
    show: { type: Boolean, default: true },
    size: { type: String as PropType<ModalSizeVariant>, default: null },
    fullscreen: {
      type: String as PropType<ResponsiveVariant | boolean>,
      default: null,
    },
    ['aria:role']: { type: String, default: null },
    ['aria:buttonClose']: { type: String, default: null },
    ['aria:title']: { type: String, default: null },
    ['aria:body']: { type: String, default: null },
  },
  emits: ['show', 'hide', 'close'],
  setup(props, { emit, slots, attrs }) {
    const {
      show,
      autoFocus,
      disableEscKey,
      disableBackdrop,
      scrollable,
      verticalCenter,
      size,
      animate,
      fullscreen,
    } = toRefs(props)
    const main: Ref<HTMLElement | null> = ref(null)
    const remove = ref(false)
    watch(show, value => (remove.value = !value))
    const visible = computed(() => show.value && !remove.value)

    const theme = useReactiveThemeConfig<UiModalThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiModalThemeConfigDefaults
    )

    const aria = useReactiveAriaConfig<UiModalAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiModalAriaDefaults
    )

    const fullscrenClass = (): string[] => {
      const fullscren = fullscreen.value
      if (!fullscren) return []

      return [
        fullscren === true
          ? theme.value.cssClass.fullscreenAll
          : theme.value.cssClass.fullscreenVariants[
              fullscren as ResponsiveVariant
            ],
      ]
    }

    const classes = computed(() => [
      theme.value.cssClass.main,
      ...(animate.value ? [theme.value.cssClass.animated] : []),
    ])

    const wrapperClasses = computed(() => [
      theme.value.cssClass.wrapper,
      ...(size.value ? [theme.value.cssClass.sizes[size.value]] : []),
      ...(verticalCenter.value
        ? [theme.value.cssClass.verticallyCentered]
        : []),
      ...(scrollable.value ? [theme.value.cssClass.scrollable] : []),
      ...fullscrenClass(),
    ])

    const close = (type: 'esc' | 'backdrop') => {
      console.log('close', type)
      if (type === 'esc' && disableEscKey.value) {
        return
      }
      if (type === 'backdrop' && disableBackdrop.value) {
        return
      }
      remove.value = true
    }
    const afterEnter = () => {
      if (autoFocus.value) {
        main.value?.focus()
      }
      emit('show')
    }
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('hide')

    return {
      main,
      remove,
      visible,
      classes,
      wrapperClasses,
      close,
      slots,
      afterEnter,
      beforeLeave,
      afterLeave,
      props,
      theme,
      aria,
    }
  },
})
//TODO: dynamic height,
</script>
