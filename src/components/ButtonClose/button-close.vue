<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    :class="classes"
    @click="close"
  ></button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { cssClassPrefix } from '@/utils/utils'

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
</script>
