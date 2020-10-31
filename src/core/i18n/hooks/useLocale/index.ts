import { useRouter } from 'next/router';

import { LocaleType } from 'core/i18n/types';

export default function useLocale() {
  const router = useRouter();

  return router.locale as LocaleType;
}
