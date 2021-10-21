import { App } from 'vue'
import tooltipDirective from './Tooltip'

// register all directives
const directives = (app: App) => {
  tooltipDirective(app)
}

export default directives
