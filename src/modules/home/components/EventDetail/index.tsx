import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE } from './locales'

const EventDetail = () => {
  const I18n = useI18n()

  return <div>{I18n.t(EVENT_DETAIL_TITLE)}</div>
}

export default EventDetail
