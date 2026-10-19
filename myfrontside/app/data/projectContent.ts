import { marked } from 'marked'
import type { Locale } from '~/i18n/messages'

/*
 * Rich project descriptions live in app/content/projects/<slug>.<lang>.md
 * (e.g. glevse-site.en.md, glevse-site.ru.md). They are bundled at build time.
 */
const files = import.meta.glob<string>('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const sources = new Map<string, string>()
for (const [path, text] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.md$/, '') // "glevse-site.en"
  sources.set(name, text)
}

const cache = new Map<string, string>()

/** HTML for a project's page, falling back to the other language if one is missing. */
export function projectContentHtml(slug: string, locale: Locale): string | null {
  const fallback: Locale = locale === 'en' ? 'ru' : 'en'
  const key = sources.has(`${slug}.${locale}`) ? `${slug}.${locale}` : `${slug}.${fallback}`
  const md = sources.get(key)
  if (md === undefined) return null

  if (!cache.has(key)) cache.set(key, marked.parse(md, { async: false, gfm: true }))
  return cache.get(key)!
}
