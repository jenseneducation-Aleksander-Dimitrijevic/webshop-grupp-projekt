<template>
  <div class="card" v-if="product">
    <div class="card-content">
      <h1 class="vans">
        {{ product.name }}
        <span class="close-modal" @click="$router.go(-1)">&times;</span>
      </h1>
      <img :src="require('../assets/' + product.img + '.png')" alt="shoe" />
      <p class="price">
        <span>{{ product.price }} kr</span>
      </p>
      <p class="info">{{ product.description }}</p>
      <button class="cart" id="button" @click="addToCart(product)">
        Add to basket
      </button>
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
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 1rem;

  &-content {
    margin: auto;
    max-width: 375px;

    .vans {
      color: #b56161;
      text-align: left;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .close-modal {
        color: #000;
        font-size: 3rem;
        cursor: pointer;
      }
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
      width: 100%;
      border: none;
      padding: 1rem;
      color: white;
      font-size: 24px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 5px;
      margin: 1rem 0 5rem 0;
      background: #b56161;
    }
  }
}

@media screen and (min-width: 768px) {
  .card {
    &-content {
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(#000, 0.2);
      .close-modal {
        top: 3rem;
        right: 5rem;
        color: #000;
        font-size: 5rem;
        cursor: pointer;
        position: absolute;
      }

      button {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
