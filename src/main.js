import Vue from 'vue'
import App from './App.vue'

// moment js
const moment = require('moment')
require('moment/locale/ru')
Vue.use(require('vue-moment'), {
  moment
})
// //moment js

// element vue
import DatePicker from 'element-ui';
import Select from 'element-ui';
import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/date-picker.css';
import 'element-ui/lib/theme-chalk/select.css';
import 'element-ui/lib/theme-chalk/checkbox.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(DatePicker, {locale});
Vue.use(Select, {locale});
// //element vue

// animation
// import 'vue2-animate/src/sass/vue2-animate.scss'
import './styles/animation/vue2-animate.scss'
// //animation

Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')

global.vm = vm;