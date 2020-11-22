import React, { useEffect, useState } from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Container from 'common/components/Container'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { TitleText } from 'common/components/Text'

import {whiteC} from 'common/styles/colors'

import { SPONSOR_TITLE } from './locales'
import { Level1Container, Level2Container, Level3Container } from './styled'
import axios from 'axios'




const Sponsor = () => {

	const [sponsorPictureUrlL3, setSponsorPictureUrlL3] = useState([])
	const [sponsorPictureUrlL2, setSponsorPictureUrlL2] = useState([])
	const [sponsorPictureUrlL1, setSponsorPictureUrlL1] = useState([])

	const I18n = useI18n()


	const mapDataToPictureUrl = (data: any, lvl: number) => {
		return data.filter((d: any) => d.level == lvl).map((d: any) => {
			return { hash: d.picture[0].hash, alt: d.name }
		}
		)
	}

	useEffect(() => {
		axios.get("https://barcamp-296415-fvdpzyll3a-de.a.run.app/sponsors")
			.then((res) => {
				setSponsorPictureUrlL3(mapDataToPictureUrl(res.data, 3))
				setSponsorPictureUrlL2(mapDataToPictureUrl(res.data, 2))
				setSponsorPictureUrlL1(mapDataToPictureUrl(res.data, 1))
				
			}).catch((err) => {
				console.error(err);
			})
	}, [])

	return (
		<Container id ="sponsor">
			<TitleText > {I18n.t(SPONSOR_TITLE)} </TitleText>
			<Flex alignItems="center" justifyContent="center" direction="column">
				<Gap size="20px" type="vertical">
					<Gap size="24px" type="vertical" alignCenter>
						{
							sponsorPictureUrlL3.map((pic: any) => {
								return (
									<Level3Container>
										<img src={`https://barcamp-296415-fvdpzyll3a-de.a.run.app/uploads/large_${pic.hash}.png`} alt={pic.alt} />
									</Level3Container>
							
								)
							})
						}

						{
							sponsorPictureUrlL2.map((pic: any) => {
								return (
									<Level2Container>
										<img src={`https://barcamp-296415-fvdpzyll3a-de.a.run.app/uploads/medium_${pic.hash}.png`} alt={pic.alt} />
									</Level2Container>
				
								)
							})
						}

						{
							sponsorPictureUrlL1.map((pic: any) => {
								return (
									<Level1Container>
										<img src={`https://barcamp-296415-fvdpzyll3a-de.a.run.app/uploads/small_${pic.hash}.png`} alt={pic.alt} />
									</Level1Container>

								)
							})
						}

					</Gap>
				</Gap>
			</Flex>
		</Container>
	)

}



export default Sponsor
