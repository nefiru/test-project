<template>
	<v-card>
		<v-card-title class="headline grey lighten-2">
			packageData info
		</v-card-title>

		<div class="item">
			<div>
				Name: 
			</div>
			<div>
				{{packageData.name}}
			</div>
		</div>
		<div class="item">
			<div>
				Version: 
			</div>
			<div>
				{{packageData.version}}
			</div>
		</div>
		<div class="item">
			<div>
				License: 
			</div>
			<div>
				{{packageData.license}}
			</div>
		</div>
		<div class="item">
			<div>
				Homepage: 
			</div>
			<div>
				<a :href="packageData.homepage" target="_blank">{{packageData.homepage}}</a>
			</div>
		</div>
		<div class="item">
			<div>
				Description: 
			</div>
			<div>
				{{packageData.description}}
			</div>
		</div>
		<div class="item">
			<div>
				Keywords: 
			</div>
			<div>
				<span v-for="(tag, i) in packageData.keywords" :key="i">{{tag}};</span>
			</div>
		</div>
		<div class="item">
			<div>
				Owner: 
			</div>
			<div>
				{{packageData.owner.name}}
				(<a :href="packageData.owner.link" target="_blank">{{packageData.owner.link}}</a>)
			</div>
		</div>
	</v-card>
</template>

<script>
export default {
	props: {
		packageData: Object
	},
}
</script>

<style lang="scss" scoped>
	.item {
		width: 100%;
		padding: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		> div:first-child {
			min-width: 120px;
			font-weight: bold;
		}
		> div:last-child {
			max-width: calc(100% - 120px);
		}
	}
</style>