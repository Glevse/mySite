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

export const projects: Project[] = [
  {
    slug: 'glevse-site',
    title: 'my.glevse.site',
    description: {
      en: "The site you're on right now: a Nuxt frontend with light and dark themes and two languages, deployed automatically with GitHub Actions.",
      ru: 'Сайт, на котором вы сейчас находитесь: фронтенд на Nuxt со светлой и тёмной темой и двумя языками, автоматически деплоится через GitHub Actions.'
    },
    tags: ['Nuxt', 'Vue', 'TypeScript', 'GitHub Actions']
  }
]

export function findProject(slug: string) {
  return projects.find(p => p.slug === slug)
}
