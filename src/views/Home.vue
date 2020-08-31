<template>
  <div class="wrapper">
    <div class="content">
      <h2>Buy a shoe!</h2>
      <h4>100% SATISFACTION GUARANTEE</h4>
    </div>
    <Card />
    <Products />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Products from "@/components/Products.vue";
export default {
  components: {
    Card,
    Products,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.content {
  text-transform: uppercase;
  width: 100%;
  height: 50%;
  max-width: 375px;
  background: #b56161;
  text-align: center;
  padding: 1em;
  h2 {
    margin-top: 3em;
    padding: 1em;
    border: 1px solid #000;
    background-color: #833c3c;
    color: #fff;
  }
  h4 {
    margin: 1.2 auto;
    padding: 1rem;
    color: #fff;
  }
}
</style>
