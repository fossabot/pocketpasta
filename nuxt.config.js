const pkg = require('./package');

module.exports = {
  mode: 'universal',

  manifest: {
    theme_color: '#4DBA87',
    display: 'standalone',
  },

  router: {
    linkActiveClass: 'active',
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
      {
        name: 'google-site-verification',
        content: 'LqVnUnYGR8NrvXrhnFgW5RjNJVChZp2j2OEP55xjE30',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  generate: {
    // if you want to use '404.html' instead of the default '200.html'
    fallback: false,
    routes: ['/', '/about', '/newsletter', '/recipes', '/recipes/detail/1'],
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: {
  //   color: '#000',
  // },
  // Disable loading bar since AMP will not generate a dynamic page
  loading: false,

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',
  ],

  googleAnalytics: {
    id: 'UA-125711214-1',
    dev: false,
  },

  sentry: {
    // Enter your project's DSN here
    dsn: 'https://46d059ea02a240dfbb89bfaa4926f463@sentry.io/1411042',
    // Additional config
    config: {
      // enable sentry-webpack-plugin used to send releases to Sentry
      publishRelease: true,
      disabled: process.env.NODE_ENV !== 'production',
    },
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
