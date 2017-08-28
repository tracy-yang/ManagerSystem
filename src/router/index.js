import Vue from 'vue'
import Router from 'vue-router'
import allNews from '../views/news/allNews'

Vue.use(Router)

export default [
	{
		path:'/'
	},
	{
		path:'/news',
		name:'新闻管理',
		component:allNews
	}
]
