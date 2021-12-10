---
to: packages/<%= h.changeCase.param(name) %>/src/shims-vue.d.ts
---
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  type NewType = {}
  const component: DefineComponent<{}, {}, NewType> & { TAG_NAME: string }
  export default component
}
