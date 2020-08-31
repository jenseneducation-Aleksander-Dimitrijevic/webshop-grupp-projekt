<template>
  <div>
    <button class="burger" @click="isOpen = false">Burger Icon</button>
    <div class="side-menu" v-if="isOpen">Side Menu</div>
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