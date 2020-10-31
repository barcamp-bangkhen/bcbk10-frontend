import React, { ReactNode } from 'react'

import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import NavigationBar from 'core/components/NavigationBar'

const GlobalStyle = createGlobalStyle`
	body {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Kanit', 'Roboto', sans-serif;
		color: #404040;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`
type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <meta
	name="google-site-verification"
	content="btDCfTsvIv3g8wszlYI_tql1hYf592bDjLWsfUS2lUY"
        />
        <link
	href="https://fonts.googleapis.com/css?family=Kanit|Roboto&display=swap"
	rel="stylesheet"
        />
        <title>Barcamp Bangkhen</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <NavigationBar />
      {children}
    </div>
  )

export default RootLayout
