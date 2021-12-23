import { shallowMount, mount } from '@vue/test-utils'
import { UiTabs, UiTab } from '../../src'
import { PropType } from 'vue'
import { UiTabModel } from '../../src/models/ui-tab.model'
import { bsUiTabsPanelThemeConfigDefaults } from '../../src/defaults/bs-ui-tabs-panel-theme.config'
import { UiTabsPanelAriaDefaults } from '../../src/defaults/ui-tabs-panel-aria.config'

const TestComponent = {
  props: {
    tabs: { type: Array as PropType<UiTabModel[]>, default: [] },
  },
  components: { UiTabs, UiTab },
  template: `
    <ui-tabs>
      <ui-tab v-for="tab in tabs" :title="tab.title" :active="tab.active" :disabled="tab.disabled">
        Hello From {{tab.title}}
      </ui-tab>
    </ui-tabs>
  `,
}

describe('ui-tabs.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiTabs, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should renders tab component as child', async () => {
    const title = 'Tab1'
    const wrapper = mount(TestComponent, {
      props: {
        tabs: [
          {
            title,
            active: false,
            disabled: false,
          },
        ],
      },
    })

    await wrapper.vm.$nextTick()

    const liElement = wrapper.find('li')
    const linkElement = liElement.find('a')

    expect(liElement.exists()).toBeTruthy()
    expect(liElement.classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.item
    )
    expect(liElement.text()).toBe(title)
    expect(linkElement.classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.link
    )
  })

  it('should renders a disabled tab', async () => {
    const wrapper = mount(TestComponent, {
      props: {
        tabs: [
          {
            title: 'Tab1 Disabled',
            active: false,
            disabled: true,
          },
        ],
      },
    })

    await wrapper.vm.$nextTick()

    const liElement = wrapper.find('li')

    expect(liElement.find('a').classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.itemDisabled
    )
  })

  it('should toggle active state between tabs', async () => {
    const wrapper = mount(TestComponent, {
      props: {
        tabs: [
          {
            title: 'Tab1',
            active: false,
            disabled: false,
          },
          {
            title: 'Tab2',
            active: false,
            disabled: false,
          },
        ],
      },
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('li')).toHaveLength(2)

    const [tab1, tab2] = wrapper.findAll('li')
    const linkElement1 = tab1.find('a')
    const linkElement2 = tab2.find('a')

    expect(linkElement1.classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.itemActive
    )
    expect(linkElement1.attributes()['aria-current']).toEqual(
      UiTabsPanelAriaDefaults.currentPage
    )
    expect(linkElement2.classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.link
    )

    linkElement2.trigger('click')
    await wrapper.vm.$nextTick()

    expect(linkElement2.classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.itemActive
    )
    expect(linkElement2.attributes()['aria-current']).toEqual(
      UiTabsPanelAriaDefaults.currentPage
    )
    expect(linkElement1.classes()).toContain(
      bsUiTabsPanelThemeConfigDefaults.cssClass.link
    )
  })

  it('should show default accessibility strings', async () => {
    const wrapper = mount(TestComponent, {
      props: {
        tabs: [
          {
            title: 'Tab1',
            active: false,
            disabled: false,
          },
        ],
      },
    })

    await wrapper.vm.$nextTick()

    const liElement = wrapper.find('li')
    const linkElement = liElement.find('a')

    expect(linkElement.attributes('role')).toEqual(UiTabsPanelAriaDefaults.role)
    expect(linkElement.attributes()['aria-current']).toEqual(
      UiTabsPanelAriaDefaults.currentPage
    )
  })

  it('should emit select when a tab is clicked', async () => {
    const wrapper = mount(TestComponent, {
      props: {
        tabs: [
          {
            title: 'Tab1',
            active: true,
            disabled: false,
          },
        ],
      },
    })

    wrapper.vm.$emit('select')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().select).toBeTruthy()
  })
})
