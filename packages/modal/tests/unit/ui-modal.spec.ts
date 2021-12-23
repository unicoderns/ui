import { mount } from '@vue/test-utils'
import { bsUiModalThemeConfigDefaults } from '../../src/defaults/bs-ui-modal-theme.config'
import { UiModal } from '../../src'
import { ModalSizeVariants, ResponsiveVariants } from '@unicodernsui/core'

describe('ui-modal.vue', () => {
  const theme = bsUiModalThemeConfigDefaults

  it('should render when props are set', () => {
    const wrapper = mount(UiModal, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should show title when props.title is set', () => {
    const wrapper = mount(UiModal, {
      props: { title: 'some title' },
    })

    const title = wrapper.find(
      `div.${theme.cssClass.header} ${theme.tags.title}`
    )
    expect(title.text()).toEqual('some title')
  })

  it('should show title when slots.title is set', () => {
    const wrapper = mount(UiModal, {
      slots: { title: '<a>some other title</a>' },
    })

    const title = wrapper.find(
      `div.${theme.cssClass.header} ${theme.tags.title} a`
    )
    expect(title.text()).toEqual('some other title')
  })

  it('should show props.title when props.title and slots.title are both set', () => {
    const wrapper = mount(UiModal, {
      props: { title: 'some title' },
      slots: { title: '<a>some other title</a>' },
    })

    const title = wrapper.find(
      `div.${theme.cssClass.header} ${theme.tags.title} span`
    )
    expect(title.text()).toEqual('some title')
  })

  it('should show body when props.body is set', () => {
    const wrapper = mount(UiModal, {
      props: { body: 'some body' },
    })

    const body = wrapper.find(`div.${theme.cssClass.body}`)
    expect(body.text()).toEqual('some body')
  })

  it('should show body when slots.body is set', () => {
    const wrapper = mount(UiModal, {
      slots: { body: '<a>some other body</a>' },
    })

    const body = wrapper.find(`div.${theme.cssClass.body} a`)
    expect(body.text()).toEqual('some other body')
  })

  it('should show props.body when props.body and slots.body are both set', () => {
    const wrapper = mount(UiModal, {
      props: { body: 'some body' },
      slots: { body: '<a>some other body</a>' },
    })

    const body = wrapper.find(`div.${theme.cssClass.body} span`)
    expect(body.text()).toEqual('some body')
  })

  it('should animate modal', () => {
    const wrapper = mount(UiModal, {
      props: { animate: true },
    })

    const main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.classes()).toContain(theme.cssClass.animated)
  })

  it('should dismiss modal with a close button', () => {
    const wrapper = mount(UiModal, {
      props: { dismissible: true },
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()
  })

  it('should close when backdrop click', async () => {
    const wrapper = mount(UiModal, {
      props: { dismissible: true },
    })

    let main = wrapper.find(`div.${theme.cssClass.main}`)
    main.trigger('click')
    await wrapper.vm.$nextTick()

    main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.exists()).toBeFalsy()
  })

  it('should close when esc key is pressed', async () => {
    const wrapper = mount(UiModal, {
      props: { dismissible: true },
    })

    let main = wrapper.find(`div.${theme.cssClass.main}`)
    main.trigger('keydown.esc')
    await wrapper.vm.$nextTick()

    main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.exists()).toBeFalsy()
  })

  it('should disable backdrop click', async () => {
    const wrapper = mount(UiModal, {
      props: { disableBackdrop: true },
    })

    let main = wrapper.find(`div.${theme.cssClass.main}`)
    main.trigger('click')
    await wrapper.vm.$nextTick()

    main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.exists()).toBeTruthy()
  })

  it('should disable esc key', async () => {
    const wrapper = mount(UiModal, {
      props: { disableEscKey: true },
    })

    let main = wrapper.find(`div.${theme.cssClass.main}`)
    main.trigger('keydown.esc')
    await wrapper.vm.$nextTick()

    main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.exists()).toBeTruthy()
  })

  it('should autofocus', async () => {
    const wrapper = mount(UiModal, {
      props: { autoFocus: true },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()

    const main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.attributes().tabindex).toEqual('0')
  })

  it('should be scrollable', () => {
    const wrapper = mount(UiModal, {
      props: { scrollable: true },
    })

    const content = wrapper.find(`div.${theme.cssClass.main} > div`)
    expect(content.classes()).toContain(theme.cssClass.scrollable)
  })

  it('should be center vertically', () => {
    const wrapper = mount(UiModal, {
      props: { verticalCenter: true },
    })

    const content = wrapper.find(`div.${theme.cssClass.main} > div`)
    expect(content.classes()).toContain(theme.cssClass.verticallyCentered)
  })

  it('should not show when props.show is set false', () => {
    const wrapper = mount(UiModal, {
      props: { show: false },
    })

    const main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.exists()).toBeFalsy()
  })

  it('should change size', () => {
    const wrapper = mount(UiModal, {
      props: { size: ModalSizeVariants.ExtraLarge },
    })

    const content = wrapper.find(`div.${theme.cssClass.main} > div`)
    expect(content.classes()).toContain(
      theme.cssClass.sizes[ModalSizeVariants.ExtraLarge]
    )
  })

  it('should be fullscreen', () => {
    const wrapper = mount(UiModal, {
      props: { fullscreen: true },
    })

    const content = wrapper.find(`div.${theme.cssClass.main} > div`)
    expect(content.classes()).toContain(theme.cssClass.fullscreenAll)
  })

  it('should be responsive fullscreen', () => {
    const wrapper = mount(UiModal, {
      props: { fullscreen: ResponsiveVariants.Large },
    })

    const content = wrapper.find(`div.${theme.cssClass.main} > div`)
    expect(content.classes()).toContain(
      theme.cssClass.fullscreenVariants[ResponsiveVariants.Large]
    )
  })

  it('should show accessibility strings', () => {
    const wrapper = mount(UiModal, {
      props: {
        'aria:role': 'some role',
        'aria:buttonClose': 'some button label',
        'aria:title': 'some title',
        'aria:description': 'some description text',
        dismissible: true,
      },
    })

    const button = wrapper.find('button')
    expect(button.attributes()['aria-label']).toEqual('some button label')

    const main = wrapper.find(`div.${theme.cssClass.main}`)
    expect(main.attributes()['role']).toEqual('some role')
    expect(main.attributes()['aria-labelledby']).toEqual('some title')
    expect(main.attributes()['aria-describedby']).toEqual(
      'some description text'
    )
  })
})
