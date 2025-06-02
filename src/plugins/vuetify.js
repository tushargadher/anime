// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Ensure Vuetify styles are loaded
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  // theme: {
  //   defaultTheme: 'dark',
  // },
})