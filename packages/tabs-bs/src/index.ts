import { setComponentThemeConfig } from '@uicr/core'
import { UiTabs } from '@uicr/tabs'
import { bsUiTabsPanelThemeConfigDefaults } from './bs-ui-tabs-panel-theme.config'

export function install() {
  setComponentThemeConfig(UiTabs, bsUiTabsPanelThemeConfigDefaults)
}
