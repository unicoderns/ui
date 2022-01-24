<template>
  <div :class="classes" :style="style">
    <div v-if="header" :class="theme.cssClass.header">{{ header }}</div>
    <img
      v-if="!imgBottom && imgSrc"
      :src="imgSrc"
      :class="theme.cssClass.img"
      :alt="imgAlt"
    />
    <div :class="bodyClasses">
      <h5 v-if="title" :class="theme.cssClass.title">{{ title }}</h5>
      <h6 v-if="subtitle" :class="theme.cssClass.subtitle">{{ subtitle }}</h6>
      <slot></slot>
    </div>
    <img
      v-if="imgBottom && imgSrc"
      :src="imgSrc"
      :class="theme.cssClass.imgBottom"
      :alt="imgAlt"
    />
    <div v-if="footer" :class="theme.cssClass.footer">
      {{ footer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, toRefs } from 'vue'
import { useReactiveThemeConfig } from '@unicodernsui/core'
import { uiCardThemeConfigDefaults } from './defaults/ui-card-theme.config'
import { UiCardThemeConfigModel } from './models/ui-card-theme-config.model'

const props = defineProps({
  variant: { type: String, default: '' },
  outline: { type: Boolean, default: false },
  style: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  header: { type: String, default: '' },
  footer: { type: String, default: '' },
  imgSrc: { type: String, default: '' },
  imgAlt: { type: String, default: '' },
  imgBottom: { type: Boolean, default: false },
  centerText: { type: Boolean, default: false },
})

const TAG_NAME = 'uiCard'

const attrs = useAttrs()

const { variant, outline, centerText } = toRefs(props)

const theme = useReactiveThemeConfig<UiCardThemeConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiCardThemeConfigDefaults
)

const classes = computed((): string[] => {
  const variantClass = outline.value
    ? theme.value.cssClass.outlineVariants[variant.value]
    : theme.value.cssClass.variants[variant.value]

  const textClasses = outline.value
    ? ''
    : theme.value.cssClass.textVariants[variant.value]

  const center = centerText.value ? theme.value.cssClass.center : ''

  return [
    theme.value.cssClass.main,
    center,
    ...(variant.value ? [textClasses] : []),
    ...(variant.value ? [variantClass] : []),
  ]
})

const bodyClasses = computed((): string[] => {
  const variantClass = outline.value
    ? theme.value.cssClass.outlineTextVariants[variant.value]
    : ''

  return [theme.value.cssClass.body, ...(variant.value ? [variantClass] : [])]
})
</script>
