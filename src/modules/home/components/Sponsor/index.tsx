import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Container from 'common/components/Container'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { TitleText } from 'common/components/Text'

import {whiteC} from 'common/styles/colors'

import { SPONSOR_TITLE } from './locales'
import { Level1Container, Level2Container, Level3Container } from './styled'




const Sponsor = () => {
	const I18n = useI18n()

	return (
		<Container id ="sponsor">
			<TitleText> {I18n.t(SPONSOR_TITLE)} </TitleText>
			<Flex alignItems="center" justifyContent="center" direction="column">
				<Gap size="20px" type="vertical">
					<Gap size="24px" type="vertical" alignCenter>
						<Level3Container>
							<img src="/static/images/lmwn.png" alt="lineman x wongnai" />
							{/* <img src="/static/images/line.svg" /> */}
						</Level3Container>
						<Level2Container>
							<img src="/static/images/lmwn.png" alt="lineman x wongnai" />
							{/* <img src="/static/images/line.svg" /> */}
						</Level2Container>
						<Level1Container>
							<img src="/static/images/lmwn.png" alt="lineman x wongnai" />
							{/* <img src="/static/images/line.svg" /> */}
						</Level1Container>
					</Gap>
				</Gap>
			</Flex>
		</Container>
	)
}

export default Sponsor
