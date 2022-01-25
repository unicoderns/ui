import { shallowMount, mount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiCard, UiCardText } from '../../src'
import { uiCardThemeConfigDefaults } from '../../src/defaults/ui-card-theme.config'

describe('ui-card.vue', () => {
  const theme = uiCardThemeConfigDefaults
  it('should render classes for card with background', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { outline: false, variant: BootstrapVariants.Primary },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find('div')

    expect(card.classes()).toContain(
      theme.cssClass.variants[BootstrapVariants.Primary]
    )
  })

  it('should render classes for text of card with background', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { outline: false, variant: BootstrapVariants.Primary },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find('div')

    expect(card.classes()).toContain(
      theme.cssClass.textVariants[BootstrapVariants.Primary]
    )
  })

  it('should render classes of card without background', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { outline: true, variant: BootstrapVariants.Primary },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find('div')

    expect(card.classes()).toContain(
      theme.cssClass.outlineVariants[BootstrapVariants.Primary]
    )
  })

  it('should render classes for text of card without background', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { outline: true, variant: BootstrapVariants.Primary },
    })

    await wrapper.vm.$nextTick()

    const body = wrapper.find(`div.${theme.cssClass.body}`)

    expect(body.classes()).toContain(
      theme.cssClass.outlineTextVariants[BootstrapVariants.Primary]
    )
  })
  it('should render center class when centerProp is true', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { centerText: true },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find('div')

    expect(card.classes()).toContain(uiCardThemeConfigDefaults.cssClass.center)
  })

  it('should render a header when header prop is set', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { header: 'some header' },
    })

    await wrapper.vm.$nextTick()

    const header = wrapper.find(`div.${theme.cssClass.header}`)

    expect(header.text()).toEqual('some header')
  })

  it('should render a footer when footer prop is set', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { footer: 'some footer' },
    })

    await wrapper.vm.$nextTick()

    const footer = wrapper.find(`div.${theme.cssClass.footer}`)

    expect(footer.text()).toEqual('some footer')
  })

  it('should render a title when title prop is set', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { title: 'some title' },
    })

    await wrapper.vm.$nextTick()

    const body = wrapper.find(`div.${theme.cssClass.body}`)

    const title = body.find('h5')

    expect(title.text()).toEqual('some title')
  })

  it('should render subtitle when subtitle prop is set', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { subtitle: 'some subtitle' },
    })

    await wrapper.vm.$nextTick()

    const body = wrapper.find(`div.${theme.cssClass.body}`)

    const subtitle = body.find('h6')

    expect(subtitle.text()).toEqual('some subtitle')
  })

  it('should render an image at the top when img prop is set and imgBottom is false', async () => {
    const wrapper = shallowMount(UiCard, {
      props: {
        imgSrc: 'https://picsum.photos/600/300/?image=25',
        imgBottom: false,
      },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find(`div.${theme.cssClass.main}`)

    const image = card.find(`img.${theme.cssClass.img}`)

    expect(image.exists()).toBeTruthy()
  })

  it('should render an image at the bottom when img prop is set and imgBottom is true', async () => {
    const wrapper = shallowMount(UiCard, {
      props: {
        imgSrc: 'https://picsum.photos/600/300/?image=25',
        imgBottom: true,
      },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find(`div.${theme.cssClass.main}`)

    const image = card.find(`img.${theme.cssClass.imgBottom}`)

    expect(image.exists()).toBeTruthy()
  })

  it("shouldn't render an image when img prop is null", async () => {
    const wrapper = shallowMount(UiCard, {
      props: {},
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find(`div.${theme.cssClass.main}`)

    const image = card.find(`img.${theme.cssClass.imgBottom}`)

    expect(image.exists()).toBeFalsy()
  })
})

const TestComponent = {
  components: { UiCard, UiCardText },
  template: `
  <ui-card>
    <ui-card-text>
      Some quick example text.
    </ui-card-text>
  </ui-card>
  `,
}

describe('ui-card.vue', () => {
  const theme = uiCardThemeConfigDefaults
  it('should renders card test component as child', async () => {
    const wrapper = mount(TestComponent, {})

    await wrapper.vm.$nextTick()

    const body = wrapper.find(`div.${theme.cssClass.body}`)

    const text = body.find(`p.${theme.cssClass.text}`)

    expect(text.text()).toEqual('Some quick example text.')
  })
})
