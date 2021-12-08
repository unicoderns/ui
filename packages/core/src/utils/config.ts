import { inject, toRefs, computed, Ref, provide } from 'vue'
import {
  KeyPairString,
  uiAriaConfigInjectionToken,
  UiAriaConfigModel,
  UiComponentAriaConfigModel,
  UiComponentThemeConfigModel,
  uiThemeConfigInjectionToken,
  UiThemeConfigModel,
  ResponsiveVariants,
  ResponsiveConfig,
} from '../types'

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
    {}
  )

  return JSON.parse(JSON.stringify(globalThemeConfig))
}

function getComponentThemeConfig(
  componentTag: string
): UiComponentThemeConfigModel | null {
  const globalThemeConfig = getGlobalThemeConfig()
  if (!globalThemeConfig[componentTag]) {
    return null
  }

  return { ...globalThemeConfig[componentTag] }
}

function getGlobalAriaConfig(): UiAriaConfigModel {
  const globalAriaConfig: UiAriaConfigModel = inject(
    uiAriaConfigInjectionToken,
    {}
  )

  return JSON.parse(JSON.stringify(globalAriaConfig))
}

function getComponentAriaConfig(
  componentTag: string
): UiComponentAriaConfigModel | null {
  const globalAriaConfig = getGlobalAriaConfig()
  if (!globalAriaConfig[componentTag]) {
    return null
  }

  return { ...globalAriaConfig[componentTag] }
}

function getThemeConfig<T extends UiComponentThemeConfigModel>(
  componentTag: string,
  attrs: Readonly<{ [key: string]: unknown }>,
  defaults: T
): T {
  const themeConfig = getComponentThemeConfig(componentTag) || { ...defaults }

  // replace cssClass
  keyPaths(themeConfig.cssClass)
    .map(key => [key, `theme:${key}`])
    .filter(([, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      setValue(themeConfig.cssClass, key, attrs[propName] as string)
    )

  // append cssClass
  keyPaths(themeConfig.cssClass)
    .map(key => [key, `theme:${key}.add`])
    .filter(([, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      setValue(themeConfig.cssClass, key, attrs[propName] as string, true)
    )

  // remove cssClass
  keyPaths(themeConfig.cssClass)
    .map(key => [key, `theme:${key}.remove`])
    .filter(([, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      unsetValue(themeConfig.cssClass, key, attrs[propName] as string)
    )
  return themeConfig as T
}

function getAriaConfig<T extends UiComponentAriaConfigModel>(
  componentTag: string,
  attrs: Readonly<{ [key: string]: unknown }>,
  defaults: T
): T {
  const ariaConfig = getComponentAriaConfig(componentTag) || { ...defaults }

  // replace aria
  keyPaths(ariaConfig)
    .map(key => [key, `aria:${key}`])
    .filter(([, propName]) => !!attrs[propName])
    .forEach(([key, propName]) =>
      setValue(ariaConfig, key, attrs[propName] as string)
    )

  return ariaConfig as T
}

function flattenProps(
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>
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

export function useReactiveThemeConfig<T extends UiComponentThemeConfigModel>(
  componentTag: string,
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>,
  defaults: T
): Ref<T> {
  const result = computed(() => {
    const attrs = flattenProps(_attrs, _props)
    return getThemeConfig<T>(componentTag, attrs, defaults)
  })

  return result
}

export function useReactiveAriaConfig<T extends UiComponentAriaConfigModel>(
  componentTag: string,
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>,
  defaults: T
): Ref<T> {
  const result = computed(() => {
    const attrs = flattenProps(_attrs, _props)
    return getAriaConfig<T>(componentTag, attrs, defaults)
  })

  return result
}

function getResponsiveConfig(
  property: string,
  attrs: Readonly<{ [key: string]: unknown }>
): ResponsiveConfig {
  return {
    all: !!attrs[property] || false,
    variants: {
      [ResponsiveVariants.ExtraSmall]:
        !!attrs[`${property}:${ResponsiveVariants.ExtraSmall}`] || false,
      [ResponsiveVariants.Small]:
        !!attrs[`${property}:${ResponsiveVariants.Small}`] || false,
      [ResponsiveVariants.Medium]:
        !!attrs[`${property}:${ResponsiveVariants.Medium}`] || false,
      [ResponsiveVariants.Large]:
        !!attrs[`${property}:${ResponsiveVariants.Large}`] || false,
      [ResponsiveVariants.ExtraLarge]:
        !!attrs[`${property}:${ResponsiveVariants.ExtraLarge}`] || false,
      [ResponsiveVariants.ExtraExtraLarge]:
        !!attrs[`${property}:${ResponsiveVariants.ExtraExtraLarge}`] || false,
    },
  }
}

export function useReactiveResponsiveConfig(
  property: string,
  _attrs: Readonly<{ [key: string]: unknown }>,
  _props: Readonly<{ [key: string]: unknown }>
): Ref<ResponsiveConfig> {
  const result = computed(() => {
    const attrs = flattenProps(_attrs, _props)
    return getResponsiveConfig(property, attrs)
  })

  return result
}

export function setThemeConfig(custom: UiThemeConfigModel) {
  const current = getGlobalThemeConfig()
  console.log('global', current)
  provide(uiThemeConfigInjectionToken, {
    ...current,
    ...custom,
  })
}

export function setAriaConfig(custom: UiAriaConfigModel) {
  const current = getGlobalAriaConfig()
  provide(uiAriaConfigInjectionToken, {
    ...current,
    ...custom,
  })
}

export function setComponentThemeConfig(
  { TAG_NAME }: { TAG_NAME: string },
  custom: UiComponentThemeConfigModel
) {
  setThemeConfig({ [TAG_NAME]: custom })
}

export function setComponentAriaConfig(
  { TAG_NAME }: { TAG_NAME: string },
  custom: UiComponentAriaConfigModel
) {
  setAriaConfig({ [TAG_NAME]: custom })
}
