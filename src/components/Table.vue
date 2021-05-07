<template>
	<div>
		<v-data-table
			:headers="headers"
			:items="packages"

			:loading="changeFilter"

    		hide-default-footer
		>
			<template v-slot:item.view="{ item }">
				<v-btn text @click="open(item)" color="success">View</v-btn>
			</template>
		</v-data-table>

		<v-dialog
			v-model="openDialog"
			width="500"
		>
			<pop-up :packageData="current" />
		</v-dialog>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import PopUp from '@/components/Dialog';

export default {
	data () {
		return {
			headers: [
				{ text: 'Name', value: 'name', width: '50%' },
				{ text: 'Version', value: 'version' },
				{ text: 'View', value: 'view' },
			],
			current: false,
			openDialog: false
		}
	},
	methods: {
		open (item) {
			this.current = item;
			this.openDialog = true;
		}
	},
	computed: {
		...mapGetters({
			packages: 'list',
			changeFilter: 'changeFilter',
		}),
	},
	components: {
		PopUp
	}
}
</script>

<style>

</style>