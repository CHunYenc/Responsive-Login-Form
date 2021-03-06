import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faLock)
library.add(faUser)


Vue.component('v-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");