import { SupportedLanguajes } from '../types'
import prettier from 'prettier'
import parserHtml from 'prettier/parser-html'
import parserBabel from 'prettier/parser-babel'
import parserCSS from 'prettier/parser-postcss'

const prettierOptions = (lang: string) => {
  switch (lang) {
    case SupportedLanguajes.HTML:
      return {
        parser: 'html',
        plugins: [parserHtml],
      }
    case SupportedLanguajes.Javascript:
      return {
        parser: 'babel',
        plugins: [parserBabel],
      }
    case SupportedLanguajes.CSS:
      return {
        parser: 'css',
        plugins: [parserCSS],
      }
    case SupportedLanguajes.React:
      return {
        parser: 'react',
        plugins: [parserHtml],
      }
    case SupportedLanguajes.Json:
      return {
        parser: 'json',
        plugins: [parserBabel],
      }
  }
  return {
    parser: 'html',
    plugins: [parserHtml],
  }
}

export const prismClass = (lang: string) => {
  switch (lang) {
    case SupportedLanguajes.HTML:
      return 'language-html'
    case SupportedLanguajes.Javascript:
      return 'language-javascript'
    case SupportedLanguajes.CSS:
      return 'language-css'
    case SupportedLanguajes.React:
      return 'language-jsx'
    case SupportedLanguajes.Json:
      return 'language-json'
  }
  return 'language-html'
}

export function prettierFormat(code: string, lang: string) {
  return prettier.format(code, prettierOptions(lang))
}
