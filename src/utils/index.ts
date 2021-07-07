export const kebabToPascalCase = (value: string) =>
  value
    .replace(/^./g, c => c.toUpperCase())
    .replace(/-./g, c => c.toUpperCase()[1])

export const cssClassPrefix = (value: string) => `${value}-`

export const tagName = (className: string, prefix: string | null = null) => {
  const TAG_PREFIX = (prefix && prefix.trim()) || 'Ui'
  return `${TAG_PREFIX}${kebabToPascalCase(className)}`
}
