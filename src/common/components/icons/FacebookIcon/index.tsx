import React from 'react'

import { IconProps } from '../types'

const FacebookIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg
			height={size}
			data-name="Ebene 1"
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512c0 255.55 187.23 467.37 432 505.78V660H302V512h130V399.2C432 270.88 508.439 200 625.39 200 681.408 200 740 210 740 210v126h-64.563C611.835 336 592 375.467 592 415.957V512h142l-22.7 148H592v357.78c244.77-38.408 432-250.22 432-505.78z"
				fill="#1877f2"
			/>
			<path
				d="M711.3 660L734 512H592v-96.043C592 375.466 611.835 336 675.437 336H740V210s-58.592-10-114.61-10C508.44 200 432 270.88 432 399.2V512H302v148h130v357.78a517.4 517.4 0 0 0 160 0V660z"
				fill="#fff"
			/>
		</svg>
	)
}
export default FacebookIcon
