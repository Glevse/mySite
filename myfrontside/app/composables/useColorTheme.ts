export type ColorTheme = 'light' | 'dark'

/**
 * Theme is stored in a cookie so the server renders the right `data-theme`
 * on <html> (no flash). With no cookie the OS preference is used via CSS.
 */
export function useColorTheme() {
  const theme = useCookie<ColorTheme | null>('theme', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })

  function current(): ColorTheme {
    if (theme.value) return theme.value
    if (import.meta.client && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  }

  function toggle() {
    theme.value = current() === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}
