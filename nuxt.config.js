export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt-App',
      script: [
    ],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  
  serverMiddleware: [
    '~/server/server.js' 
    
    
 ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      { src: '@/plugins/swiper', ssr: false},
      { src: '@/plugins/vuetify', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  components: [
    '~/components',
    { path: '~/components/subcomponents/', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      'nuxt-purgecss'
 ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/vuetify"],
    
    vuetify:{
    optionsPath: "./plugins/vuetify.js",
   treeShake: true,
    defaultAssets: undefined
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extractCSS: true,
  }
}
