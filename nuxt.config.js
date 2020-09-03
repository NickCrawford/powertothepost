import axios from 'axios'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        property: 'og:title',
        content: '📬 Power To The Post',
      },
      {
        property: 'og:description',
        content: 'Help save the USPS!',
      },
      {
        property: 'og:image',
        content: 'https://powertothepost.com/social-preview.jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:url',
        content: 'https://powertothepost.com',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: 'https://powertothepost.com/social-preview.jpg',
      },
      {
        property: 'og:site_name',
        content: '📬 Power To The Post',
      },
      {
        name: 'twitter:image:alt',
        content:
          'Power To The Post - Help us Save the USPS by purchasing merch through our Shopify store. All proceeds support the USPS, APWU, and ACLU.',
      },
      {
        name: 'twitter:site',
        content: '@MeTimefm',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qty8gms.css' },
    ],

    __dangerouslyDisableSanitizers: ['script'],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/netlify-files'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBacjU6xqsZ_SXJRn_9FVU996BBGYnGoBc',
          authDomain: 'powertothepost-f5cac.firebaseapp.com',
          databaseURL: 'https://powertothepost-f5cac.firebaseio.com',
          projectId: 'powertothepost-f5cac',
          storageBucket: 'powertothepost-f5cac.appspot.com',
          messagingSenderId: '290575860568',
          appId: '1:290575860568:web:47103ebb9f22c1ae4f5b2d',
        },
        services: {
          firestore: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    liveEdit: false,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  generate: {
    // routes: ['']
    routes() {
      return axios
        .get(
          'https://firestore.googleapis.com/v1/projects/powertothepost-f5cac/databases/(default)/documents/messages'
        )
        .then((res) => {
          return res.data.documents.map((doc) => {
            let pieces = doc.name.split('/')
            console.log('generating ' + pieces[pieces.length - 1])

            return '/message/' + pieces[pieces.length - 1]
          })
        })
    },
  },
}
