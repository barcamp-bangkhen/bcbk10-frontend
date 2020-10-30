import React, { useEffect, useMemo } from 'react'

import './index.css'
import { Provider } from 'mobx-react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import App, { AppProps } from 'next/app'

import RootLayout from 'core/components/RootLayout'
import initializeStore from 'core/store/utils/initializeStore'

interface Props {
	stores: Record<string, any>
}

const MyApp: NextPage<AppProps & Props> = ({ Component, pageProps, stores }) => {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	const mobxStores = useMemo(() => {
		const isServer = typeof window === 'undefined'

		return isServer ? stores : initializeStore(stores)
	}, [])

	return (
		<Provider {...mobxStores}>
			<RootLayout>
				<NextSeo title="Barcamp Bangkhen" />
				<Component {...pageProps} />
			</RootLayout>
		</Provider>
	)
}

MyApp.getInitialProps = async (ctx: any) => {
	const stores = initializeStore()
	ctx.stores = stores

	const appProps = await App.getInitialProps(ctx)

	return {
		...appProps,
		stores,
	} as any
}

export default MyApp
