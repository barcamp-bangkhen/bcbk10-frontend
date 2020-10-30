import { useRouter } from 'next/router'
import { LocaleType } from 'core/i18n/types'
import { useCallback } from 'react'

export default function useChangeLocale() {
  const router = useRouter()

  const setLocale = useCallback(
    (locale: LocaleType = 'th') => {
      const pathname = router.pathname

      router.push({ pathname }, { pathname }, { locale })
    },
    [router]
  )

  return { setLocale }
}
