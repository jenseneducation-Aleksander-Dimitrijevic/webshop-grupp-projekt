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
        <img
          class="product-image"
          :src="require('../assets/' + product.img + '.png')"
          @click="
            $router.push({ name: 'shoes', params: { id: product.id, product } })
          "
          alt="product image"
        />
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
  max-width: 1440px;
  padding: 1rem 2rem;
  margin: 0 auto 100px auto;

  a {
    color: #000;
    font-size: 3rem;
    margin-bottom: 1rem;
    display: inline-block;
    text-decoration: none;

    span {
      display: none;
    }
  }

  h1 {
    color: #ae635d;
    margin-bottom: 2rem;
    font-weight: bolder;

    span {
      color: #999;
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
      cursor: pointer;
      border-radius: 3px;

      .product-image {
        width: 100%;
        height: 100px;
      }

      .product-detail {
        display: flex;
        margin-top: 1rem;
        font-size: 0.9rem;
        font-weight: bold;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .container {
    margin-top: 50px;

    .product-list {
      gap: 8rem 4rem;

      .list-item {
        .product-image {
          width: 100%;
          height: 400px;
        }

        .product-detail {
          text-align: center;
        }
      }
    }
  }
}
</style>
