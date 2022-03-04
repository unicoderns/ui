import { mount, VueWrapper } from '@vue/test-utils'
import { Positions } from '@uicr/core'
import { ToastMessageQueueService } from '../../src/toast-message-queue.service'
import { UiToastContainer, UiToastService } from '../../src'
import { uiToastThemeConfigDefaults } from '../../src/defaults/ui-toast-theme.config'

describe('ui-toast-container.vue', () => {
  const theme = uiToastThemeConfigDefaults
  let wrapper: VueWrapper<any>
  let service: UiToastService | undefined

  beforeEach(async () => {
    wrapper = mount(UiToastContainer)

    service = ToastMessageQueueService.singletonInstance
    service.clear()
  })

  it('should render when props are set', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should create a new toast message when service add method is called', async () => {
    service?.add({
      message: 'some message',
    })
    await wrapper.vm.$nextTick()

    const toasts = wrapper.findAll(`.${theme.cssClass.main}`)
    expect(toasts).toHaveLength(1)
  })

  it('should remove all toast messages when service clear method is called', async () => {
    service?.add({
      message: 'some message',
    })
    service?.add({
      message: 'some other message',
    })
    await wrapper.vm.$nextTick()

    service?.clear()
    await wrapper.vm.$nextTick()

    const toasts = wrapper.findAll(`.${theme.cssClass.main}`)
    expect(toasts).toHaveLength(0)
  })

  it('should have default position for toast message', async () => {
    const wrapper2 = mount(UiToastContainer, {
      props: {
        defaultPosition: Positions.TopCenter,
      },
    })
    service?.add({
      message: 'some message',
    })
    await wrapper2.vm.$nextTick()

    const toasts = wrapper2.findAll(
      `div.top-0.start-50 .${theme.cssClass.main}`
    )
    expect(toasts).toHaveLength(1)
  })

  it('should render custom header for toast message', async () => {
    const wrapper2 = mount(UiToastContainer, {
      slots: {
        toastHeader:
          '<template #toastHeader="{ item }"><a>{{ item.headerText }}</a></template>',
      },
    })
    service?.add({
      headerText: 'some header',
      message: 'some message',
    })
    await wrapper2.vm.$nextTick()

    const toastHeader = wrapper2.find(`div.${theme.cssClass.header} a`)
    expect(toastHeader.text()).toEqual('some header')
  })

  it('should render custom body for toast message', async () => {
    const wrapper2 = mount(UiToastContainer, {
      slots: {
        toastBody:
          '<template #toastBody="{ item }"><a>{{ item.message }}</a></template>',
      },
    })
    service?.add({
      headerText: 'some header',
      message: 'some message',
    })
    await wrapper2.vm.$nextTick()

    const toastBody = wrapper2.find(`div.${theme.cssClass.body} a`)
    expect(toastBody.text()).toEqual('some message')
  })

  it('should animate toast message', async () => {
    service?.add({
      message: 'some message',
      animate: true,
    })
    await wrapper.vm.$nextTick()

    const toast = wrapper.find(`.${theme.cssClass.main}`)
    expect(toast.classes()).toContain(theme.cssClass.animated)
  })

  it('should show dismissable header for toast message', async () => {
    service?.add({
      headerText: 'some header',
      message: 'some message',
      dismissible: true,
    })
    await wrapper.vm.$nextTick()

    const closeBtn = wrapper.find(`.${theme.cssClass.header} button`)
    expect(closeBtn.exists()).toBeTruthy()
  })

  it('should show dismissable with no header for toast message', async () => {
    service?.add({
      message: 'some message',
      dismissible: true,
    })
    await wrapper.vm.$nextTick()

    let closeBtn = wrapper.find(`.${theme.cssClass.header} button`)
    expect(closeBtn.exists()).toBeFalsy()
    closeBtn = wrapper.find('button')
    expect(closeBtn.exists()).toBeTruthy()
  })

  it('should dismiss toast message after custom time', async () => {
    jest.useFakeTimers()
    service?.add({
      message: 'some message',
      msTimer: 100,
    })
    await wrapper.vm.$nextTick()

    jest.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    const toasts = wrapper.findAll(`.${theme.cssClass.main}`)
    expect(toasts).toHaveLength(0)
  })

  it('should show toast message with light text when prop.dark is true', async () => {
    service?.add({
      message: 'some message',
      dark: true,
    })
    await wrapper.vm.$nextTick()

    const toast = wrapper.find(`.${theme.cssClass.message}`)
    expect(toast.classes()).toContain(theme.cssClass.textLight)
  })

  it('should show toast message with custom position', async () => {
    service?.add({
      message: 'some message',
      position: Positions.MiddleCenter,
    })
    await wrapper.vm.$nextTick()

    const toasts = wrapper.findAll(
      `div.top-50.start-50 .${theme.cssClass.main}`
    )
    expect(toasts).toHaveLength(1)
  })

  it('should show toast message with custom accessibility strings', async () => {
    service?.add({
      message: 'some message',
      'aria:buttonClose': 'some button text',
      'aria:live': 'some live text',
      'aria:role': 'some role text',
      dismissible: true,
    })
    await wrapper.vm.$nextTick()

    const toast = wrapper.find(`.${theme.cssClass.main}`)
    expect(toast.attributes()['aria-live']).toEqual('some live text')
    expect(toast.attributes()['role']).toEqual('some role text')
    const button = wrapper.find(`.${theme.cssClass.main} button`)
    expect(button.attributes()['aria-label']).toEqual('some button text')
  })
})
