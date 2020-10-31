import { useCallback } from 'react'

import { useRouter } from 'next/router'

import { DEFAULT_LOCALE, STORAGE_LOCALE_KEY } from 'core/i18n/constants'
import { LocaleType } from 'core/i18n/types'
import setLocalStorage from 'core/localStorage/setLocalStorage'

export default function useSetLocale() {
  const router = useRouter()

  const setLocale = useCallback(
    (locale: LocaleType = DEFAULT_LOCALE) => {
      const pathname = router.pathname

      router.push({ pathname }, { pathname }, { locale })
      setLocalStorage(STORAGE_LOCALE_KEY, locale)
    },
    [router]
  )

  return setLocale
}
