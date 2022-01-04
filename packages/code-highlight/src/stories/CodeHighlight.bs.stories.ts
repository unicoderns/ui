import { action } from '@storybook/addon-actions'
import { UiTabs, UiTab } from '@unicodernsui/tabs'
import { ref } from 'vue'
import { UiCodeHighlight } from '..'
import { SupportedLanguajes } from '../types'
import { UiCodeHighlightDoc } from '../dev'

enum StoryTypes {
  slot = 'slot',
  code = 'code',
  ref = 'ref',
}

export default {
  title: 'UI/Bootstrap/CodeHighlight',
  components: { UiCodeHighlight, UiTabs, UiTab },
  argTypes: {
    refCode: { control: { type: 'text' } },
    lang: {
      control: { type: 'select' },
      options: Object.values(SupportedLanguajes),
    },
    storyType: {
      control: { type: 'select' },
      options: Object.values(StoryTypes),
    },
  },
  parameters: {
    docs: {
      page: UiCodeHighlightDoc,
    },
  },
}

type CodeHighlightModel = {
  code: string | null
  lang: SupportedLanguajes
  storyType: string
  lineNumbers: boolean
}

const Template = (args: CodeHighlightModel) => ({
  components: { UiCodeHighlight, UiTabs, UiTab },
  setup() {
    const { storyType, ...newArgs } = args
    const codeElement = ref()
    return { args: newArgs, storyType, codeElement }
  },
  methods: {
    select: action('select'),
  },
  template: `
  <div>
  <template v-if="storyType === 'slot'">
    <ui-code-highlight v-bind="args">
        <ui-tabs @select="select" >
            <ui-tab title="Tab 1">
            Hello From Tab 1
            </ui-tab>
            <ui-tab title="Tab 2">
            Hello From Tab 2
            </ui-tab>
            <ui-tab title="Tab 3" :active="true">
            Hello From Tab 3
            </ui-tab>
            <ui-tab title="Tab 4" :disabled="true">
            Hello From Tab 4
            </ui-tab>
        </ui-tabs>
    </ui-code-highlight>
  </template>
  <template v-if="storyType === 'ref'">
  <div ref="codeElement">
    <ui-tabs @select="select" >
        <ui-tab title="Tab 1">
        Hello From Tab 1
        </ui-tab>
        <ui-tab title="Tab 2">
        Hello From Tab 2
        </ui-tab>
        <ui-tab title="Tab 3" :active="true">
        Hello From Tab 3
        </ui-tab>
        <ui-tab title="Tab 4" :disabled="true">
        Hello From Tab 4
        </ui-tab>
    </ui-tabs>
  </div>
  <ui-code-highlight v-bind="args" v-if="codeElement" :code="codeElement">
  </ui-code-highlight>
</template>
  <template v-else>
    <ui-code-highlight v-bind="args">
    </ui-code-highlight>
  </template>
</div>
 `,
})

const htmlArgs: CodeHighlightModel = {
  code: null,
  lang: SupportedLanguajes.HTML,
  storyType: StoryTypes.slot,
  lineNumbers: true,
}

const refArgs: CodeHighlightModel = {
  code: null,
  lang: SupportedLanguajes.HTML,
  storyType: StoryTypes.ref,
  lineNumbers: true,
}

const jsArgs: CodeHighlightModel = {
  code: `// program to include constants
        const a = 5;
        console.log(a);
        
        // constants are block-scoped
        {
            const a = 50;
            console.log(a);
        }
        console.log(a);
        
        const arr = ['work', 'exercise', 'eat'];
        console.log(arr);
        
        // add elements to arr array
        arr[3] = 'hello';
        console.log(arr);
        
        // the following code gives error
        // changing the value of a throws an error
        // uncomment to verify
        // a = 8;
        
        // throws an error
        // const x; `,
  lang: SupportedLanguajes.Javascript,
  storyType: StoryTypes.code,
  lineNumbers: true,
}

const cssArgs: CodeHighlightModel = {
  code: `p {
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
  }`,
  lang: SupportedLanguajes.CSS,
  storyType: StoryTypes.code,
  lineNumbers: true,
}

const jsonArgs: CodeHighlightModel = {
  code: `{
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
`,
  lang: SupportedLanguajes.Json,
  storyType: StoryTypes.code,
  lineNumbers: false,
}

export const Default = Template.bind({})
Default.args = {
  ...htmlArgs,
}

export const CodeByReference = Template.bind({})
CodeByReference.args = {
  ...refArgs,
}

export const Javascript = Template.bind({})
Javascript.args = {
  ...jsArgs,
}

export const CSS = Template.bind({})
CSS.args = {
  ...cssArgs,
}

export const JSON = Template.bind({})
JSON.args = {
  ...jsonArgs,
}
