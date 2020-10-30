import React from 'react'
import createMeta from './createMeta'

const Home = () => {
	return (
		<div>
			{createMeta()}
			<h1>Home Page</h1>
		</div>
	)
}

export default Home
