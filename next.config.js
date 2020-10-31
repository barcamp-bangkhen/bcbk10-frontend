module.exports = {
  distDir: './functions/next',
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th'
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
