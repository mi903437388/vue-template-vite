import {
	getRequest
} from "./request.js";
import {useRoute} from 'vue-router'

const views = import.meta.glob('../views/**/*.vue')

export const initMenu = (router, store,to) => {
	
	if (store.getters['permission/getRoutes'].length > 0) {
		return;
		
	}
	 getRequest("/system/config/menu").then(data => {
		if (data) {
			//格式化router
			let fmtRoutes = formatRoutes(data);

			//从返回的数据中解析动态路由数据
			let data2 = addRoute(data);
			//将动态路由添加进router
			addFmtRoutes2(data2, router)
			const routeData2 = router.getRoutes()

			//将数据存入vuex
			store.commit('permission/initRoutes', fmtRoutes);
			// store.dispatch('permission/initRoutes',fmtRoutes)

			router.replace(to.path)
		}
	})
}

//循环添加路由
const addFmtRoutes2 = (fmtRoutes2, router) => {

	fmtRoutes2.forEach(item => {
		// console.log(keys[])
		router.addRoute('home', {
			path: item.path,
			meta: item.meta,
			name: item.name,
			component:item.component
		})
	})
}
// 获取2级路由
export const addRoute = (data) => {
	let fmRoutes = []
	data.forEach(item => {
		let {
			children
		} = item
		children.forEach(route => {
			let {
				path,
				name,
				component,
				keepAlive
			} = route
			let formatRoute = {
				path: path,
				name: name,
				meta: {keepAlive},
				component: views['../'+component+'.vue']
			}
			fmRoutes.push(formatRoute)
		})
	})
	return fmRoutes
}

export const formatRoutes = (routes) => {
	let fmRoutes = [];
	routes.forEach(router => {
		let {
			path,
			component,
			name,
			meta,
			iconCls,
			enabled,
			children,
		} = router;
		if (children && children instanceof Array) {
			//递归
			children = formatRoutes(children);
		}
		let fmRouter = {
			path: path,
			name: name,
			meta: meta,
			iconCls: iconCls,
			hidden: !enabled,
			children: children
		}
		fmRoutes.push(fmRouter);
	})
	return fmRoutes;
}
