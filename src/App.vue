<template>
	<v-app id="app">
		<header-search />
		<div v-if="totalCount > 0">
			<list />
			<pagination />
		</div>
		<div v-else>
			Nothing found
		</div>

		<footer-card />
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import List from '@/components/Table.vue';
import HeaderSearch from '@/components/Header.vue';
import Pagination from '@/components/Pagination.vue';
import FooterCard from '@/components/Footer.vue';


export default {
	components: {
		HeaderSearch, 
		List,
		Pagination,
		FooterCard
	},
	computed: {
		...mapGetters({
			totalCount: 'totalCount'
		}),
	},
	created () {
		this.$store.dispatch('getList');
	},
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}

th {
	text-align: left;
}
</style>
