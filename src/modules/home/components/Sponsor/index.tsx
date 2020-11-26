import React, { useEffect, useState } from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Container from 'common/components/Container'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { TitleText } from 'common/components/Text'

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
			return { format: d.picture[0].formats, alt: d.name }
		}
		)
	}

	useEffect(() => {
		axios.get("https://barcamp-296415-fvdpzyll3a-de.a.run.app/sponsors")
			.then((res) => {
				console.log(res.data)
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
										<img src={`${pic.format.large.url}`} alt={pic.alt} />
									</Level3Container>
							
								)
							})
						}

						{
							sponsorPictureUrlL2.map((pic: any) => {
								return (
									<Level2Container>
										<img src={`${pic.format.medium.url}`} alt={pic.alt} />
									</Level2Container>
				
								)
							})
						}

						{
							sponsorPictureUrlL1.map((pic: any) => {
								return (
									<Level1Container>
										<img src={`${pic.format.small.url}`} alt={pic.alt} />
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
