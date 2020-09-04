<template>
  <div class="card" v-if="product">
    <div>
      <h1 class="vans">{{ product.name }}</h1>
      <img :src="require('../assets/' + product.img + '.png')" alt="shoe" />
      <p class="price">
        <span>{{ product.price }} kr</span>
      </p>
      <p class="info">{{ product.description }}</p>
      <button class="cart" id="button" @click="addToCart(product)">Add to basket</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", product);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  max-width: 375px;
  padding: 1rem;
  .vans {
    color: #b56161;
    text-align: left;
    padding: 1rem 0;
  }
  .info {
    max-width: 300px;
    padding: 2rem 0;
    font-size: 18px;
  }
  img {
    width: 100%;
    height: 200px;
    margin: 1rem 0;
  }
  .price {
    text-align: left;
    font-size: 24px;
    padding: 2rem 0 0 0;
  }
  button {
    background: #b56161;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    color: white;
  }
}
</style>
