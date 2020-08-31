<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
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

<style lang="scss" scoped></style>
