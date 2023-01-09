import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	routers:[
		{
			path:'/',
			name:'Home',
			component:()=>import('./view/MyHome.vue'),
		},
		{
			path:'/config',
			name:'Config',
			component:()=>import('./view/Config.vue')
		}
	]
})
