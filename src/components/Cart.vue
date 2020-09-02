<template>
	<div class="wrapper">
		<span>{{count}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 1
			}
		},
		methods:{
			increment(){
				this.count = 2
			},
			decrement(){
				this.count = 1
			}


			
		}
	}
</script>

<style lang="scss" scoped>

</style>