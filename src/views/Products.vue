<template>
  <div class="container">
    <h1>Shoes</h1>
    <ul class="product-list">
      <li class="list-item" v-for="product in products" :key="product.id">
        <span class="product-name">{{ product.name }}</span>
        <img :src="require('../assets/'+product.img+'.png')" alt="product-image" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    const RESPONSE = await axios.get("http://localhost:3000/products");
    this.products = RESPONSE.data;
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
  margin: 50px 0;

  h1 {
    margin-bottom: 2rem;
  }

  .product-list {
    display: grid;
    list-style: none;
    grid-template-columns: 1fr;

    .list-item {
      width: 100%;
      height: 300px;
      display: block;
      border-radius: 3px;
      background: no-repeat center center/100%;

      .product-name {
        font-size: 1.3rem;
      }

      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
