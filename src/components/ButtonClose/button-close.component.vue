<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    :class="classes"
    @click="close"
  ></button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { cssClassPrefix } from '@/utils'

const className = 'btn-close'
const classPrefix = cssClassPrefix(className)

export default defineComponent({
  TAG_NAME: className,
  props: {
    ariaLabel: {
      type: String,
      default: 'Close',
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const { invert } = toRefs(props)

    const classes = computed((): string[] => {
      return [className, invert.value ? `${classPrefix}white` : '']
    })

    const close = (): void => {
      emit('close')
    }
    return {
      classes,
      close,
    }
  },
})
/*
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {
    ariaLabel: {
      type: String,
      default: 'Close',
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
})
export default class ButtonClose extends Vue {
  static CLASS_NAME = 'btn-close'
  readonly ClassPrefix = cssClassPrefix(ButtonClose.CLASS_NAME)

  readonly ariaLabel!: string
  readonly invert!: boolean

  protected get classes(): string[] {
    return [
      ButtonClose.CLASS_NAME,
      this.invert ? `${this.ClassPrefix}white` : '',
    ]
  }

  protected close(): void {
    this.$emit('close')
  }
}
*/
</script>
