import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 
// If you don't need the styles, do not connect
 

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2);

// import vuePdf from 'vue-pdf'

// Vue.use(vuePdf)

new Vue(App).$mount("#app")
