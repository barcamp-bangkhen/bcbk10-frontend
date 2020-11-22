import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Gap from 'common/components/Gap'

import { SPONSOR_TITLE } from './locales'
import { Level1Container, Level2Container, Level3Container } from './styled'

const Sponsor = () => {
	const I18n = useI18n()

	return (
		<Gap size="16px" type="vertical">
			<div>{I18n.t(SPONSOR_TITLE)}</div>
			<Gap size="24px" type="vertical" alignCenter>
				<Level3Container>
					<img src="/static/images/lmwn.png" />
					<img src="/static/images/line.svg" />
				</Level3Container>
				<Level2Container>
					<img src="/static/images/lmwn.png" />
					<img src="/static/images/line.svg" />
				</Level2Container>
				<Level1Container>
					<img src="/static/images/lmwn.png" />
					<img src="/static/images/line.svg" />
				</Level1Container>
			</Gap>
		</Gap>
	)
}

export default Sponsor
