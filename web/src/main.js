import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import i18n from './i18n'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
  data: {
    currentLocale: localStorage.getItem('locale') || 'en',
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.currentLocale = locale;
      localStorage.setItem('locale', locale);
    },
  },
  created() {
    this.$i18n.locale = this.currentLocale;
  },
})
