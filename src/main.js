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

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to,from,next) => {
  console.log(to.path,from.path);
  if(to.path === 'login'){
    
  }
  // if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  // } else {
  //     next('/login'); // 否则全部重定向到登录页
  // }
})

new Vue({
  el: '#app',
  store,
  router,
	render:(h) => h(App)
})
