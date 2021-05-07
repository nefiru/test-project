<template>
	<div class="header">
		<v-text-field
			class="search"
            label="Name"
			@input="setSearch"
			:value="search"
		></v-text-field>
	</div>
</template>

<script>
export default {
	data () {
		return {
			search: '',
			flag: false,
			timer: false
		}
	},
	methods: {
		setSearch (val) {
			this.search = val;

			this.$store.commit('setChangeFilter', true);

			clearTimeout(this.timer);
			this.timer = setTimeout(this.startSearch, 500);
		},
		startSearch () {
			this.$store.commit('setSearch', this.search);
			this.$store.dispatch('getList');
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: flex-end;
	padding: 0 20px;

	.search {
		max-width: 200px;
	}
}
</style>