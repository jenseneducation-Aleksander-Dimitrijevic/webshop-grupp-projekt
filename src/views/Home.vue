<template>
  <div>
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

<style lang="scss" scoped></style>
