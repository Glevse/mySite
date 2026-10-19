import { locales, messages, type Locale, type MaybeLocalized, type MessageKey } from '~/i18n/messages'

/**
 * Language is stored in a cookie so the server renders the right language.
 * First visit: Russian if the browser asks for it, otherwise English.
 */
export function useLocale() {
  const headers = useRequestHeaders(['accept-language'])
  const locale = useCookie<Locale>('lang', {
    default: () => (headers['accept-language']?.toLowerCase().startsWith('ru') ? 'ru' : 'en'),
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })

  if (!locales.includes(locale.value)) locale.value = 'en'

  /** Translate a UI string. */
  function t(key: MessageKey): string {
    return messages[locale.value][key]
  }

  /** Pick the current language from project data (plain strings pass through). */
  function tr(text: MaybeLocalized): string {
    return typeof text === 'string' ? text : text[locale.value]
  }

  function toggle() {
    locale.value = locale.value === 'en' ? 'ru' : 'en'
  }

  return { locale, t, tr, toggle }
}
