// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store'
import style from './css/style.scss'
import YButton  from './components/button/button'

Vue.use(VueRouter)

Vue.component('y-button',YButton);

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  store,
  router,
	render:(h) => h(App)
})
