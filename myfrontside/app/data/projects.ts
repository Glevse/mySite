import type { Localized, MaybeLocalized } from '~/i18n/messages'

export interface Project {
  /** URL id: /projects/<slug>. Latin letters, digits and dashes only. */
  slug: string
  /** Plain string if the name is the same in both languages, or { en, ru }. */
  title: MaybeLocalized
  description: Localized
  /** Technologies used. Plain string for names like "Kotlin", { en, ru } for ones that translate. */
  tags: MaybeLocalized[]
  /** Optional external link (repo, live demo, …) */
  url?: string
}

// Replace these placeholders with your real projects.
export const projects: Project[] = [
  {
    slug: 'myproj',
    title: 'My own portfolio site',
    description: {
      en: 'This site: frontend on Nuxt.js deploy via Github Actions',
      ru: 'Текущий сайт: фронтенд на Nuxt.js деплоится через Github Actions'
    },
    tags: ['Nuxt']
  }
]

export function findProject(slug: string) {
  return projects.find(p => p.slug === slug)
}
