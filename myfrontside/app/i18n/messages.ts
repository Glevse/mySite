export const locales = ['en', 'ru'] as const
export type Locale = (typeof locales)[number]

/** A piece of text written in every supported language. */
export type Localized = Record<Locale, string>

/** Text that is either the same in all languages, or translated. */
export type MaybeLocalized = string | Localized

// UI strings (everything that isn't project data).
export const messages = {
  en: {
    'site.description': 'hkial — projects',
    'home.greeting': "Hi, I'm",
    'home.subtitle': "Things I've built and am building.",
    'sidebar.title': 'Projects',
    'sidebar.all': 'All projects',
    'sidebar.toggle': 'Toggle projects list',
    'sidebar.close': 'Close projects list',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.toggle': 'Switch language to Russian',
    'header.github': 'My GitHub',
    'project.back': '← All projects',
    'project.open': 'Open project ↗',
    'project.stack': 'Technologies',
    'footer.contacts': 'Contacts',
    'footer.email': 'Email',
  },
  ru: {
    'site.description': 'hkial — проекты',
    'home.greeting': 'Привет, я',
    'home.subtitle': 'То, что я сделал и над чем работаю.',
    'sidebar.title': 'Проекты',
    'sidebar.all': 'Все проекты',
    'sidebar.toggle': 'Открыть список проектов',
    'sidebar.close': 'Закрыть список проектов',
    'theme.toggle': 'Переключить светлую/тёмную тему',
    'lang.toggle': 'Переключить язык на английский',
    'header.github': 'Мой GitHub',
    'project.back': '← Все проекты',
    'project.open': 'Открыть проект ↗',
    'project.stack': 'Технологии',
    'footer.contacts': 'Контакты',
    'footer.email': 'Почта',
  }
} satisfies Record<Locale, Record<string, string>>

export type MessageKey = keyof (typeof messages)['en']
