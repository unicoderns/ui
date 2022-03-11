import { mount, shallowMount } from '@vue/test-utils'
import { InputSizeVariants } from '@uicr/core'
import { UiPagination } from '../../src'
import { uiPaginationThemeConfigDefaults } from '../../src/defaults/ui-pagination-theme.config'

const defaultProps = {
  totalItems: 100,
  itemsPerPage: 5,
}
describe('ui-pagination.vue', () => {
  it('should render pagination component with small size', async () => {
    const wrapper = shallowMount(UiPagination, {
      props: { ...defaultProps, size: InputSizeVariants.Small },
    })
    const theme = uiPaginationThemeConfigDefaults

    await wrapper.vm.$nextTick()

    const ul = wrapper.find('ul')

    expect(ul.classes()).toContain(theme.cssClass.sizes.sm)
  })

  it('should render pagination component with medium size', async () => {
    const wrapper = shallowMount(UiPagination, {
      props: { ...defaultProps, size: InputSizeVariants.Medium },
    })
    const theme = uiPaginationThemeConfigDefaults

    await wrapper.vm.$nextTick()

    const ul = wrapper.find('ul')

    expect(ul.classes()).toContain(theme.cssClass.sizes.md)
  })

  it('should render pagination component with large size', async () => {
    const wrapper = shallowMount(UiPagination, {
      props: { ...defaultProps, size: InputSizeVariants.Large },
    })
    const theme = uiPaginationThemeConfigDefaults

    await wrapper.vm.$nextTick()

    const ul = wrapper.find('ul')

    expect(ul.classes()).toContain(theme.cssClass.sizes.lg)
  })

  it.skip('should render pagination with maximum visible items', async () => {
    const maxVisiblePages = 5
    const itemsShown = [
      'Previous',
      'page X',
      '...',
      ...[...Array(maxVisiblePages).keys()],
      '...',
      'page X',
      'Next',
    ].length

    const wrapper = shallowMount(UiPagination, {
      props: { ...defaultProps, maxVisiblePages, page: 10 },
    })

    await wrapper.vm.$nextTick()

    const items = wrapper.findAll('ui-pagination-item-stub')

    expect(items.length).toBe(itemsShown)
  })

  it.skip('should render active class in active page item', async () => {
    const wrapper = mount(UiPagination, {
      props: { ...defaultProps, page: 3 },
    })
    const theme = uiPaginationThemeConfigDefaults

    await wrapper.vm.$nextTick()

    const active = wrapper.find('[aria-current="page"]')

    expect(active.classes()).toContain(theme.cssClass.itemActive)
  })

  it.skip('should render disabled class', async () => {
    const wrapper = mount(UiPagination, {
      props: { ...defaultProps },
    })
    const theme = uiPaginationThemeConfigDefaults

    await wrapper.vm.$nextTick()

    const li = wrapper.find('li')

    expect(li.classes()).toContain(theme.cssClass.disabled)
  })

  it.skip('should render custom aria label', async () => {
    const label = 'some label'
    const wrapper = mount(UiPagination, {
      props: { ...defaultProps, ['aria:label']: label },
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.attributes('aria-label')).toBe(label)
  })
})
