import { shallowMount, mount } from '@vue/test-utils'
import { ref } from 'vue'
import { SupportedLanguajes, UiCodeHighlight } from '../../src'
import { prismClass } from '../../src/utils'

describe('ui-code-highlight.vue', () => {
  const cssCode = `p {
    color: red;
    width: 500px;
    border: 1px solid black;
  }
  p, li, h1 {
    color: red;
  }
  h1 {
    font-size: 60px;
      text-align: center;
    }
  p, li { 
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
  }`

  const jsonCode = `{
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
}
`
  it('should render line-numbers class when props.linenumbers is set true', async () => {
    const wrapper = shallowMount(UiCodeHighlight, {
      props: {
        code: cssCode,
        lang: SupportedLanguajes.CSS,
        lineNumbers: true,
      },
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    expect(pre.classes()).toContain('line-numbers')
  })

  it("shouldn't render line-numbers class when props.linenumbers is set false", async () => {
    const wrapper = shallowMount(UiCodeHighlight, {
      props: {
        code: cssCode,
        lang: SupportedLanguajes.CSS,
        lineNumbers: false,
      },
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    expect(pre.classes()).not.toContain('line-numbers')
  })

  it('should render corresponding lang class', async () => {
    const lang = SupportedLanguajes.Json
    const wrapper = shallowMount(UiCodeHighlight, {
      props: {
        code: jsonCode,
        lang: lang,
        lineNumbers: false,
      },
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    const code = pre.find('code')

    expect(code.classes()).toContain(prismClass(lang))
  })

  it("pre tag shouldn't exist, when code equal null and the slot is empty", async () => {
    const lang = SupportedLanguajes.Json
    const wrapper = shallowMount(UiCodeHighlight, {
      props: {
        code: null,
        lang: lang,
        lineNumbers: false,
      },
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    expect(pre.exists()).toBeFalsy()
  })

  it('pre tag should exist when code prop is a string', async () => {
    const lang = SupportedLanguajes.Json
    const wrapper = shallowMount(UiCodeHighlight, {
      props: {
        code: jsonCode,
        lang: lang,
        lineNumbers: false,
      },
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    expect(pre.exists()).toBeTruthy()
  })
})

const TestComponentSlot = {
  components: { UiCodeHighlight },
  template: `
    <ui-code-highlight>
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </ui-code-highlight>
    `,
}

describe('ui-code-highlight.vue', () => {
  it('pre tag should exist when received someting through the slot', async () => {
    const wrapper = mount(TestComponentSlot, {
      props: {
        code: null,
        lang: SupportedLanguajes.HTML,
        lineNumbers: true,
      },
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    expect(pre.exists()).toBeTruthy()
  })
})

const TestComponentReference = {
  components: { UiCodeHighlight },
  setup() {
    const codeElement = ref()

    return { codeElement }
  },
  template: `
      <ui-code-highlight  v-if="codeElement" :code="codeElement">
      </ui-code-highlight>
      <ul class="nav" ref="codeElement">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    `,
}

describe('ui-code-highlight.vue', () => {
  it('pre tag should exist when code prop is an object', async () => {
    const wrapper = mount(TestComponentReference, {
      props: {},
    })

    await wrapper.vm.$nextTick()

    const pre = wrapper.find('pre')

    expect(pre.exists()).toBeTruthy()
  })
})
