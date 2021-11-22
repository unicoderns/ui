import { bsThemeDefauls, uiAccessibilityDefauls } from '../defaults'
import {
  KeyPairString,
  uiAccessibilityConfigInjectionToken,
  UiAccessibilityConfigModel,
  UiComponentAccessibilityConfigModel,
  UiComponentThemeConfigModel,
  uiThemeConfigInjectionToken,
  UiThemeConfigModel,
  ResponsiveVariants,
  ResponsiveConfig,
} from '../types'
import { inject, toRefs, computed, Ref } from 'vue'

declare type ConfigLevel = { [key: string]: string | ConfigLevel }

function keyPaths(item: ConfigLevel): string[] {
  const keys = Object.keys(item)
  const paths: string[] = []
  keys.forEach(key => {
    if (typeof item[key] !== 'string') {
      Object.keys(item[key]).forEach(subKey => paths.push(`${key}:${subKey}`))
    }
  })
  return [...keys, ...paths]
}

function setValue(
  item: ConfigLevel,
  path: string,
  value: string,
  append = false
) {
  const parts = path.split(':')
  if (parts.length === 1 && typeof item[path] === 'string') {
    item[path] = append ? `${item[path]} ${value}` : value
  } else if (parts.length > 1 && typeof item[path] !== 'string') {
    const nextLevel = item[parts[0]] as KeyPairString
    const nextPath = parts.splice(1).join(':')
    setValue(nextLevel, nextPath, value, append)
  }
}

function unsetValue(item: ConfigLevel, path: string, value: string) {
  const classList = value.split(' ')
  const parts = path.split(':')
  if (parts.length === 1 && typeof item[path] === 'string') {
    classList.forEach(v => (item[path] = (item[path] as string).replace(v, '')))
  } else if (parts.length > 1 && typeof item[path] !== 'string') {
    const nextLevel = item[parts[0]] as KeyPairString
    const nextPath = parts.splice(1).join(':')
    unsetValue(nextLevel, nextPath, value)
  }
}

function getGlobalThemeConfig(): UiThemeConfigModel {
  const globalThemeConfig: UiThemeConfigModel = inject(
    uiThemeConfigInjectionToken,
    bsThemeDefauls
  )
  return JSON.parse(JSON.stringify(globalThemeConfig))
}

function getComponentThemeConfig(
  componentTag: string
): UiComponentThemeConfigModel {
  const globalThemeConfig = getGlobalThemeConfig()
  return { ...globalThemeConfig[componentTag] }
}

function getGlobalAriaConfig(): UiAccessibilityConfigModel {
  const globalAriaConfig: UiAccessibilityConfigModel = inject(
    uiAccessibilityConfigInjectionToken,
    uiAccessibilityDefauls
  )
  return globalAriaConfig
}

function getComponentAriaConfig(
  componentTag: string
): UiComponentAccessibilityConfigModel {
  const globalAriaConfig = getGlobalAriaConfig()
  return { ...globalAriaConfig[componentTag] }
}

export function getThemeConfig<T extends UiComponentThemeConfigModel>(
  componentTag: string,
  attrs: Readonly<{ [key: string]: unknown }>,
): T {
  const themeConfig = getComponentThemeConfig(componentTag)

  // replace cssClass
  keyPaths(themeConfig.cssClass)
    .map(key => [key, `theme:${key}`])
    .filter(([key, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      setValue(themeConfig.cssClass, key, attrs[propName] as string)
    )

  // append cssClass
  keyPaths(themeConfig.cssClass)
    .map(key => [key, `theme:${key}.add`])
    .filter(([key, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      setValue(themeConfig.cssClass, key, attrs[propName] as string, true)
    )

  // remove cssClass
  keyPaths(themeConfig.cssClass)
    .map(key => [key, `theme:${key}.remove`])
    .filter(([key, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      unsetValue(themeConfig.cssClass, key, attrs[propName] as string)
    )
  return themeConfig as T
}

export function getAriaConfig<T extends UiComponentAccessibilityConfigModel>(
  componentTag: string,
  attrs: Readonly<{ [key: string]: unknown }>
): T {

  const ariaConfig = getComponentAriaConfig(componentTag)

  // replace aria
  keyPaths(ariaConfig)
    .map(key => [key, `aria:${key}`])
    .filter(([key, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      setValue(ariaConfig, key, attrs[propName] as string)
    )

  return ariaConfig as T
}

function flattenProps(
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>,
  ) {
  const propsReactive = toRefs(_props)
  const props = Object.keys(propsReactive)
    .map(p => ({ [p]: propsReactive[p].value }))
    .reduce((o, p) => ({ ...o, ...p }), {})

  return {
    ..._attrs,
    ...props,
  }
}

export function getReactiveThemeConfig<T extends UiComponentThemeConfigModel>(
  componentTag: string,
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>,
): Ref<T> {

  const result = computed(() => {
    const attrs = flattenProps(_attrs, _props)
    return getThemeConfig<T>(componentTag, attrs)
  })

  return result
}

export function getReactiveAriaConfig<
  T extends UiComponentAccessibilityConfigModel
>(
  componentTag: string,
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>,
): Ref<T> {
  const result = computed(() => {
    const attrs = flattenProps(_attrs, _props)
    return getAriaConfig<T>(componentTag, attrs)
  })

  return result
}

function getResponsiveConfig(
  property: string,
  attrs: Readonly<{ [key: string]: unknown }>,
): ResponsiveConfig {
  return {
    all: !!attrs[property] || false,
    variants: {
      [ResponsiveVariants.ExtraSmall]: !!attrs[`${property}:${ResponsiveVariants.ExtraSmall}`] || false,
      [ResponsiveVariants.Small]: !!attrs[`${property}:${ResponsiveVariants.Small}`] || false,
      [ResponsiveVariants.Medium]: !!attrs[`${property}:${ResponsiveVariants.Medium}`] || false,
      [ResponsiveVariants.Large]: !!attrs[`${property}:${ResponsiveVariants.Large}`] || false,
      [ResponsiveVariants.ExtraLarge]: !!attrs[`${property}:${ResponsiveVariants.ExtraLarge}`] || false,
      [ResponsiveVariants.ExtraExtraLarge]: !!attrs[`${property}:${ResponsiveVariants.ExtraExtraLarge}`] || false,
    },
  }
}

export function getReactiveResponsiveConfig(
  property: string,
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>,
): Ref<ResponsiveConfig> {
  const result = computed(() => {
    const attrs = flattenProps(_attrs, _props)
    return getResponsiveConfig(property, attrs)
  })

  return result
}
