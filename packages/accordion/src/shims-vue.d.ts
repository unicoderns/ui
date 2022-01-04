declare module '*.vue' {
  import { DefineComponent } from 'vue'
  type NewType = {}
  const component: DefineComponent<{}, {}, NewType> & { TAG_NAME: string }
  export default component
}
