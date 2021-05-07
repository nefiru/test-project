<template>
	<div>
		<v-pagination
			:value="filters.page + 1"
			@input="setPage"
			:length="pages"
			:total-visible="7"
		></v-pagination>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	methods: {
		setPage (val) {
			this.$store.commit('setChangeFilter', true);
			this.$store.commit('setPage', val - 1);

			this.$store.dispatch('getList');
		},
	},
	computed: {
		...mapGetters({
			pages: 'pages',
			filters: 'filters',
		}),
	},
}
</script>

<style>

</style>