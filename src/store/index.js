import Vue from 'vue'
import Vuex from 'vuex'
import algolia from '@/helpers/algolia.js';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		packages: [],
		filter: {
			limit: 10,
			page: 0,
			search: ''
		},
		pages: 0,
		changeFilter: false
	},
	mutations: {
		setPackages (state, data) {
			state.packages = data;
		},
		setPage (state, page) {
			if (page < 0)
				return;
			state.filter.page = page;
		},
		setPages (state, pages) {
			state.pages = pages;
		},
		setSearch (state, search) {
			state.filter.page = 0;
			state.filter.search = search;
		},
		setChangeFilter (state, flag) {
			state.changeFilter = flag;
		}
	},
	actions: {
		getList ({state, commit}) {
			return algolia.search(`*${state.filter.search}*`, state.filter.page, state.filter.limit).then(res => {
				commit('setPackages', res.response.hits);
				commit('setPages', res.response.nbPages);
				commit('setChangeFilter', false);
			})
		}
	},
	getters: {
		list (state) {
			return state.packages;
		},
		pages (state) {
			return state.pages;
		},
		filters (state) {
			return state.filter;
		},
		changeFilter (state) {
			return state.changeFilter;
		},
		totalCount (state) {
			return state.packages.length;
		}
	}
})
