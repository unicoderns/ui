<template>
  <label :for="id" :class="`${theme.cssClass.label}`">
    {{ label }}
  </label>
  <div :class="classes">
    <span :class="`${theme.cssClass.inputGroupText}`">{{
      inputGroupText
    }}</span>
    <textarea
      :id="id"
      ref="textArea"
      :role="aria.role"
      :class="[
        `${theme.cssClass.textArea}`,
        `${disabled ? theme.cssClass.disabled : ''}`,
      ]"
      :disabled="disabled"
      :maxlength="maxLength"
      v-model="referenceContent"
    >
    </textarea>
  </div>
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
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  InputSizeVariant,
  SizeVariants,
  generateId,
} from '@unicodernsui/core'
import { bsUiTextareaThemeConfigDefaults } from './defaults/bs-ui-textarea-theme.config'
import { uiTextareaAriaDefaults } from './defaults/ui-textarea-aria.config'
import { UiTextareaThemeConfigModel } from './models/ui-textarea-theme-config.model'
import { UiTextareaAriaConfigModel } from './models/ui-textarea-aria-config.model'

const TAG_NAME = 'uiTextarea'

export default defineComponent({
  TAG_NAME,
  props: {
    content: { type: String, default: '' },
    disabled: { type: Boolean, required: false, default: false },
    inputGroupText: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    maxLength: { type: Number, default: null, required: false },
    size: {
      type: String as PropType<InputSizeVariant>,
      default: SizeVariants.Medium,
    },
    ['aria:role']: { type: String, default: null },
  },
  emits: ['update:content'],
  setup(props, { attrs, emit }) {
    const { maxLength, size, content } = toRefs(props)
    const referenceContent = ref(content.value)
    const textArea: Ref<HTMLTextAreaElement | null> = ref(null)

    const theme = useReactiveThemeConfig<UiTextareaThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiTextareaThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiTextareaAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiTextareaAriaDefaults
    )

    const classes = computed((): string[] => {
      const sizeClass = theme.value.cssClass.sizes[size.value]

      return [theme.value.cssClass.main, ...(size.value ? [sizeClass] : [])]
    })

    const remainingLetters = computed(
      () => maxLength.value - content.value.length
    )
    const lettersCount = computed(() => content.value.length)

    const id = generateId()

    watch(referenceContent, () => {
      emit('update:content', referenceContent.value)
    })

    return {
      aria,
      classes,
      id,
      lettersCount,
      referenceContent,
      remainingLetters,
      textArea,
      theme,
    }
  },
})
</script>
