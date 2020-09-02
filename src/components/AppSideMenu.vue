<template>
  <div class="side-menu" :class="{toggle: isOpen}">
    <router-link to="/products" @click.native="$store.commit('TOGGLE_SIDE_MENU')">Shop</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["isOpen"]) },
};
</script>

<style lang="scss" scoped>
.side-menu {
  right: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  position: fixed;
  transition: 0.3s;
  padding: 2rem 1rem;
  text-align: center;
  background: #333;
  transform: translateY(100%);
  a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }

  &.toggle {
    transform: translateY(0);
  }
}
</style>