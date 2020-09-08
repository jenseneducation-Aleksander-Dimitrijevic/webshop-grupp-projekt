   <template>
	<div>

			{{msg}}
			<div class="itemarea"></div>

			<div class="shipping">
				<input type="radio" v-model="isClicked" id="set-adress-btn" :value="true">
				<p class="changeAdress" @click="msg = 'You have successfully changed adress!'"></p> 
			</div>

			<div class="payment">
				<!-- <button class="proceed">proceed</button> -->
			</div>
	</div>
</template>

<script>


export default {
	data() {
		return {
			isClicked: false,
			msg: null
		}
	},
}
</script>

<style lang="scss" scoped>

</style>