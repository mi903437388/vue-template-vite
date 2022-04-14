import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import store from '../store/index.js'
import {
	initMenu
} from '../api/menu.js'
import {
	getRequest
} from '../api/request.js'

const routes = [{
		path: '/',
		hidden: true,
		redirect: {
			name: 'login'
		}
	},
	{
		path: '/login',
		name: 'login',
		hidden: true,
		component: () => import('../views/Login.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/Home.vue'),
		children: [{
			path: '/peo',
			name: 'peo',
			component: () => import('../views/peo/PeoBasic.vue')
		}]
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		hidden: true,
		component: () => import('../components/NotFound.vue')
	}
]


const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes // `routes: routes` 的
})


router.beforeEach((to, from, next) => {
	if (window.sessionStorage.getItem("tokenStr")) {
		if (!window.sessionStorage.getItem("user")) {
			return getRequest('/admin/info').then(resp => {
				if (resp) {
					//存入用户信息
					window.sessionStorage.setItem("user", JSON.stringify(resp));
					next()
				}
			});
		}
		initMenu(router, store, to);
		next();
	} else {
		if (to.name !== 'login')
			next({ name: 'login' })
		else 
			next()
	}

})
export default router
