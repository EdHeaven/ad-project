import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyCQGwEbXk_WX-dvJ5IsvemcDdSfBYrr2mw",
      authDomain: "ad-pro-cf911.firebaseapp.com",
      projectId: "ad-pro-cf911",
      storageBucket: "ad-pro-cf911.appspot.com",
      messagingSenderId: "1084782525129",
      appId: "1:1084782525129:web:3d0ae9bdcff679f6cd2b18",
      measurementId: "G-89LWK61H52"
    };
  // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }

}).$mount('#app')