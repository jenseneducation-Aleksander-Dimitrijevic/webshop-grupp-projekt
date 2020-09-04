<template>
  <div class="container">
    <router-link to="/">
      <span class="lnr lnr-arrow-left"></span>
    </router-link>
    <h1>
      Shop
      <br />
      <span>{{ this.products.length }} skor i lagret</span>
    </h1>
    <ul class="product-list">
      <li class="list-item" v-for="product in products" :key="product.id">
        <div
          class="product-image"
          :style="{
            backgroundImage:
              'url(' + require('../assets/' + product.img + '.png') + ')',
          }"
          @click="
            $router.push({ name: 'shoes', params: { id: product.id, product } })
          "
        ></div>
        <p class="product-detail">
          <span>{{ product.name }}</span>
          <span class="price">{{ product.price }} kr</span>
        </p>
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
  margin: 0 0 100px 0;

  a {
    color: #000;
    font-size: 3rem;
    margin-bottom: 1rem;
    display: inline-block;
    text-decoration: none;
  }

  h1 {
    color: #ae635d;
    margin-bottom: 2rem;
    font-weight: bolder;

    span {
      font-size: 0.8rem;
      font-weight: lighter;
    }
  }

  .product-list {
    display: grid;
    gap: 6rem 1rem;
    list-style: none;
    grid-template-columns: repeat(2, 1fr);

    .list-item {
      width: 100%;
      display: block;
      max-width: 200px;
      border-radius: 3px;

      .product-image {
        height: 100px;
        width: 100%;
        background: no-repeat center/contain;
      }

      .product-detail {
        display: flex;
        margin-top: 1rem;
        font-size: 0.9rem;
        font-weight: bold;
        justify-content: space-between;
      }

      img {
        width: 100%;
        display: block;
        margin: 2rem 0;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
}
</style>
