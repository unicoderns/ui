export const kebabToPascalCase = (value: string) =>
  value
    .replace(/^./g, c => c.toUpperCase())
    .replace(/-./g, c => c.toUpperCase()[1])

export const cssClassPrefix = (value: string) => `${value}-`

export const tagName = (className: string, prefix: string | null = null) => {
  const TAG_PREFIX = (prefix && prefix.trim()) || 'Ui'
  return `${TAG_PREFIX}${kebabToPascalCase(className)}`
}

interface EnumInterface {
  [key: string]: string | number
}

export const enumEntries = (enumType: EnumInterface) =>
  Object.entries(enumType).map(([name, value]) => ({
    name,
    value,
  }))

export const enumToObjectByValue = (enumType: EnumInterface) => {
  return enumEntries(enumType)
    .map(({ name, value }) => ({ [value]: name }))
    .reduce((acum, entry) => ({ ...acum, ...entry }), {})
}

export const generateId = (): string =>
  Date.now().toString(36) +
  Math.random()
    .toString(36)
    .substring(2)
