<template>
  <h3>Tooltip Directive</h3>
  <button v-ui-tooltip:top.tooltip="'<button>Click me</button>'">
    Tooltip on top
  </button>
  <button v-ui-tooltip:bottom>Tooltip on bottom</button>
  <button v-ui-tooltip:right>Tooltip on right</button>
  <button v-ui-tooltip:left>Tooltip on left</button>
</template>

<script>
export default {}
</script>
