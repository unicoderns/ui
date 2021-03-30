import * as Components from '@/components/index'
import { tagName } from '@/utils/utils'
import { App } from 'vue'

export default {
  install(VueApp: App, prefix: string | null = null) {
    Object.values(Components).forEach(component => {
      VueApp.component(tagName(component.CLASS_NAME, prefix), component)
    })
  },
}

export * from './components/index'
