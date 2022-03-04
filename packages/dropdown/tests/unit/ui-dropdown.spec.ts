import { mount } from '@vue/test-utils'
import { BootstrapVariants, Directions, MenuItemTypes } from '@uicr/core'
import { uiDropdownThemeConfigDefaults } from '../../src/defaults/ui-dropdown-theme.config'
import { UiDropdown } from '../../src'

describe('ui-dropdown.vue', () => {
  const theme = uiDropdownThemeConfigDefaults

  it('should render when props are set', () => {
    const wrapper = mount(UiDropdown, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should show label when props.label is set', () => {
    const wrapper = mount(UiDropdown, {
      props: { variant: BootstrapVariants.Primary, label: 'some label' },
    })

    const button = wrapper.find('button')
    expect(button.text()).toEqual('some label')
  })

  it('should show label when slot.label is set', () => {
    const wrapper = mount(UiDropdown, {
      props: { variant: BootstrapVariants.Primary },
      slots: {
        label: '<span>some other label</span>',
      },
    })

    const button = wrapper.find('button span')
    expect(button.text()).toEqual('some other label')
  })

  it('should show props.label when props.label and slot.label is set', () => {
    const wrapper = mount(UiDropdown, {
      props: { variant: BootstrapVariants.Primary, label: 'some label' },
      slots: {
        label: '<span>some other label</span>',
      },
    })

    const button = wrapper.find('button')
    expect(button.text()).toEqual('some label')
  })

  it('should show split button when props.splitButton is set', () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        splitButton: true,
      },
    })

    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)
  })

  it('should show menu when button click', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        datasource: [{ type: MenuItemTypes.Button, content: 'Item 1' }],
      },
    })

    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    const menu = wrapper.find('ul')
    expect(menu.exists()).toBeTruthy()
    expect(wrapper.emitted().show).toBeTruthy()
  })

  it('should close menu when backdrop click', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        datasource: [{ type: MenuItemTypes.Button, content: 'Item 1' }],
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    wrapper.trigger('focusout')
    await wrapper.vm.$nextTick()

    const menu = wrapper.find('ul')
    expect(menu.exists()).toBeFalsy()
    expect(wrapper.emitted().hide).toBeTruthy()
  })

  it('should disable backdrop when props.disableBackdrop is set', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        datasource: [{ type: MenuItemTypes.Button, content: 'Item 1' }],
        disableBackdrop: true,
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    wrapper.trigger('focusout')
    await wrapper.vm.$nextTick()

    const menu = wrapper.find('ul')
    expect(menu.exists()).toBeTruthy()
  })

  it('should change arrowDirection when props.arrowDirection is set', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        datasource: [{ type: MenuItemTypes.Button, content: 'Item 1' }],
        arrowDirection: Directions.Up,
      },
    })

    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.classes()).toContain(
      theme.cssClass.directions[Directions.Up]
    )
  })

  it('should show accessibility strings', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        'aria:expanded': 'some expanded text',
        'aria:groupRole': 'some groupRole text',
        arrowDirection: Directions.Left,
        splitButton: true,
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    const menu = wrapper.find('ul')
    expect(menu.attributes()['aria-expanded']).toEqual('some expanded text')
    const buttonGroup = wrapper.find('div[role]')
    expect(buttonGroup.attributes()['role']).toEqual('some groupRole text')
  })

  it('should show custom item slot', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        datasource: [{ type: MenuItemTypes.Button, content: 'Item 1' }],
      },
      slots: {
        item: '<template #item="{ item }"><a>{{ item.content }}</a></template>',
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    const item = wrapper.find('ul li a')
    expect(item.text()).toEqual('Item 1')
  })

  it('should emit select when item is clicked', async () => {
    const wrapper = mount(UiDropdown, {
      props: {
        variant: BootstrapVariants.Primary,
        datasource: [{ type: MenuItemTypes.Button, content: 'Item 1' }],
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    const item = wrapper.find('ul li')
    item.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().select).toBeTruthy()
  })
})
