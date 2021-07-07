import { App } from 'vue'
import { tagName } from '@/utils'
import * as Components from '@/components'
import * as Plugins from '@/components/plugins'

const isComponent = (key: string) => key.endsWith('Component')

export default {
  install(VueApp: App, prefix: string | null = null) {
    Object.entries(Components)
      .filter(([key, _]) => isComponent(key))
      .map(([_, component]: [string, any]) => component)
      .forEach(component =>
        VueApp.component(tagName(component.TAG_NAME, prefix), component)
      )
    Object.values(Plugins).forEach(plugin => VueApp.use(plugin))
  },
}

export * from './types'
export * from './components'
export * from './components/plugins'
export * from './components/types'
