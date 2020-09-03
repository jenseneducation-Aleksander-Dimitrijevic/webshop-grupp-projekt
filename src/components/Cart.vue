<template>
	<div class="wrapper">
		<button class="sub" @click="decrement">-</button>
		<span>{{count}}</span>
		<button class="add" @click="increment">+</button>
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