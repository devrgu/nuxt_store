import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import lock from '~/components/lock.vue'
import mail from '~/components/mail.vue'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
      iconfont: null,
    values: {
      mail: { 
        component: mail, 
      },
      lock: { 
        component: lock, 
      },
    }
  },
    iconfont: null
})