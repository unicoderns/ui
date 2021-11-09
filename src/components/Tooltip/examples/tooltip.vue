<template>
  <h3>Tooltip Directive</h3>
  <div class="m-5">
    <UiBtn
      :variant="'primary'"
      v-ui-tooltip:top="'<em>Tooltip</em> <u>with</u> <b>HTML</b>'"
    >
      Tooltip on top
    </UiBtn>
    <UiBtn :variant="'primary'" v-ui-tooltip:bottom="'Tooltip with text'">
      Tooltip on bottom
    </UiBtn>
    <UiBtn :variant="'primary'" v-ui-tooltip:right>
      Tooltip on right
    </UiBtn>
    <UiBtn :variant="'primary'" v-ui-tooltip:left>
      Tooltip on left
    </UiBtn>
  </div>
</template>

<script>
import { ButtonControlComponent } from '@/index'
export default {
  components: {
    UiBtn: ButtonControlComponent,
  },
}
</script>
