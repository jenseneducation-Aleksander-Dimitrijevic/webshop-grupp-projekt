   <template>
	<div>

			
			<div class="itemarea"></div>

			<div class="shipping">
				<input type="radio" v-model="isClicked" id="set-adress-btn" :value="true">
				<!-- @click="alert('Changed Adress!')" -->
				<p class="changeAdress" ></p> -->
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
			isClicked: false
		}
	},
}
</script>

<style lang="scss" scoped>

</style>