const state = {
	routes:[]
}
const getters = {
	getRoutes(state){
		return state.routes
	},
	getRoles(state){
		return state.routes
	}
}

const mutations = {
	initRoutes(state, data) {
        state.routes = data;
    },
	getRoutes(state,data){
		stata.routes = data;
	}
}

const actions = {
	getRoutes({commit}){
		commit('getRoutes')
	},
	initRoutes({commit},value){
		commit('initRoutes',value)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}