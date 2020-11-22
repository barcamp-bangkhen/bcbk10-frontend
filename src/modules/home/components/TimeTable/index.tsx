import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { TIME_TABLE_TITLE } from './locales'

const TimeTable = () => {
  const I18n = useI18n()

  return <div>{I18n.t(TIME_TABLE_TITLE)}</div>
}

export default TimeTable
