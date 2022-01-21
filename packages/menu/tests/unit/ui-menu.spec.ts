import { mount } from '@vue/test-utils'
import { MenuItemTypes } from '@unicodernsui/core'
import { uiMenuThemeConfigDefaults } from '../../src/defaults/ui-menu-theme.config'
import { UiMenu } from '../../src'

describe('ui-menu.vue', () => {
  const theme = uiMenuThemeConfigDefaults
  it('should render when props are set', () => {
    const wrapper = mount(UiMenu, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should have inverted class when props.inverted is set true', () => {
    const wrapper = mount(UiMenu, {
      props: { invert: true },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.invert)
  })

  it('should not have static class when props.dropdown is set true', () => {
    const wrapper = mount(UiMenu, {
      props: { dropdown: true },
    })

    expect(wrapper.classes()).not.toContain(theme.cssClass.static)
  })

  it('should render link item', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Link,
            content: 'Item',
          },
        ],
      },
    })

    const item = wrapper.find('li > a')
    expect(item.exists()).toBeTruthy()
  })

  it('should render button item', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Button,
            content: 'Item',
          },
        ],
      },
    })

    const item = wrapper.find('li > button')
    expect(item.exists()).toBeTruthy()
  })

  it('should render header item', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Header,
            content: 'Item',
          },
        ],
      },
    })

    const item = wrapper.find(`li > ${theme.tags.headerItem}`)
    expect(item.exists()).toBeTruthy()
  })

  it('should render text item', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Text,
            content: 'Item',
          },
        ],
      },
    })

    const item = wrapper.find('li > span')
    expect(item.exists()).toBeTruthy()
  })

  it('should render divider', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Divider,
          },
        ],
      },
    })

    const item = wrapper.find('li > hr')
    expect(item.exists()).toBeTruthy()
  })

  it('should render raw item', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Raw,
            content: 'Item',
          },
        ],
      },
    })

    const item = wrapper.find('li')
    expect(item.text()).toEqual('Item')
  })

  it('should custom render item when slot is provided', () => {
    const wrapper = mount(UiMenu, {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Text,
            content: 'Item',
          },
        ],
      },
      slots: {
        default:
          '<template #default="{ item }"><b>{{ item.content }}</b></template>',
      },
    })

    const item = wrapper.find('li b')
    expect(item.text()).toEqual('Item')
  })

  describe('navigation', () => {
    const options = {
      props: {
        datasource: [
          {
            type: MenuItemTypes.Button,
            content: 'Item 1',
          },
          {
            type: MenuItemTypes.Button,
            content: 'Item 2',
          },
          {
            type: MenuItemTypes.Button,
            content: 'Item 3',
          },
        ],
      },
      attachTo: document.body,
    }

    it('should default select item by index', () => {
      const wrapper = mount(UiMenu, {
        ...options,
        props: {
          ...options.props,
          defaultSelectedIndex: 1,
        },
      })

      const selected = wrapper.find(`button.${theme.cssClass.itemActive}`)
      expect(selected.text()).toEqual('Item 2')
    })

    it('should move down when down key is pressed', () => {
      const wrapper = mount(UiMenu, options)

      wrapper.trigger('keydown.down')

      const buttons = wrapper.findAll('button')
      expect(buttons[1].element).toEqual(document.activeElement)
    })

    it('should move up when up key is pressed', () => {
      const wrapper = mount(UiMenu, options)
      const buttons = wrapper.findAll('button')
      buttons[2].element.focus()

      wrapper.trigger('keydown.up')

      expect(buttons[1].element).toEqual(document.activeElement)
    })

    it('should select item when clicked', async () => {
      const wrapper = mount(UiMenu, options)
      const elements = wrapper.findAll('li')

      elements[2].trigger('click')
      await wrapper.vm.$nextTick()

      const selected = wrapper.find(`button.${theme.cssClass.itemActive}`)
      expect(selected.text()).toEqual('Item 3')
    })

    it('should select item when space key is pressed', () => {
      const wrapper = mount(UiMenu, options)
      const buttons = wrapper.findAll('button')
      buttons[2].element.focus()

      wrapper.trigger('keydown.space')

      expect(wrapper.emitted().select).toBeTruthy()
      expect(wrapper.emitted().select[0]).toEqual([options.props.datasource[2]])
    })

    it('should select item when enter key is pressed', () => {
      const wrapper = mount(UiMenu, options)
      const buttons = wrapper.findAll('button')
      buttons[2].element.focus()

      wrapper.trigger('keydown.enter')

      expect(wrapper.emitted().select).toBeTruthy()
      expect(wrapper.emitted().select[0]).toEqual([options.props.datasource[2]])
    })
  })
})
