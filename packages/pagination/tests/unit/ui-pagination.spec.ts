import { shallowMount } from '@vue/test-utils'
import { InputSizeVariants } from '@unicodernsui/core'
import { UiPagination } from '../../src'
import { uiPaginationThemeConfigDefaults } from '../../src/defaults/ui-pagination-theme.config'

const defaultProps = {
  totalItems: 100,
}
describe('ui-pagination.vue', () => {
  it('should render pagination with small size', async () => {
    const wrapper = shallowMount(UiPagination, {
      props: { ...defaultProps, size: InputSizeVariants.Small },
    })
    const theme = uiPaginationThemeConfigDefaults

    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain(theme.cssClass.sizes.Small)
  })
})
