import Vue from 'vue'
import Router from 'vue-router'
import allNews from '../views/news/allNews'
import login from '../views/login/index'
import mainLayout from '../layout/main';
import layout from '../layout/layout'

Vue.use(Router)

export default [
	{ path: '/login', component: login, hidden: true },
	{
		path:'/',
		redirect: '/news',
		component:mainLayout
	},
	{
		path:'/news',
		name:'新闻管理',
		component:layout,
		children:[
			{
				path:'list',
				component: allNews,
				name:'新闻列表'
			}	
		]
	}
]
