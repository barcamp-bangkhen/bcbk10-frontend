import { LocaleType } from 'core/i18n/types'
import { useRouter } from 'next/router'

export default function useLocale() {
  const router = useRouter()

  return router.locale as LocaleType
}
