import React, { useEffect, useMemo } from 'react'

import { Provider } from 'mobx-react'
import { NextSeo } from 'next-seo'
import App, { AppContext, AppProps } from 'next/app'

import RootLayout from 'core/components/RootLayout'
import initializeStore from 'core/store/utils/initializeStore'

interface Props {
  stores: Record<string, any>
}

const MyApp = ({ Component, pageProps, stores }: AppProps & Props) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
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

MyApp.getInitialProps = async (ctx: AppContext & Props) => {
  const stores = initializeStore()
  ctx.stores = stores

  const appProps = await App.getInitialProps(ctx)

  return {
    ...appProps,
    stores,
  }
}

export default MyApp
