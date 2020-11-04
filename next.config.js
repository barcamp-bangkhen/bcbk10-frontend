module.exports = {
	i18n: {
		locales: ['th', 'en'],
		defaultLocale: 'th',
		domains: [
			{
				domain: 'bcbk.org',
				defaultLocale: 'th-TH',
			},
			{
				domain: 'beta.bcbk.org',
				defaultLocale: 'th-TH',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		]
	},
}
