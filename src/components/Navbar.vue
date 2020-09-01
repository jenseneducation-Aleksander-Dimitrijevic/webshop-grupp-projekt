<template>
  <div id="nav" class="nav">
    <nav>
      <div>
        <router-link to="/" class="brand">Home</router-link>
        <router-link :to="{ name: 'products' }">Products</router-link>|
        <div class="side-menu" v-if="isOpen">Side Menu</div>
        <button class="burger" @click="isOpen = !isOpen">Burger Icon</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>