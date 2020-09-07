<template>
  <ul class="side-menu" :class="{toggle: isOpen}">
    <li>
      <router-link to="/products" @click.native="$store.commit('TOGGLE_SIDE_MENU')">Shop</router-link>
    </li>
    <li>
      <router-link to="about" @click.native="$store.commit('TOGGLE_SIDE_MENU')">About</router-link>
    </li>
    <li>
      <router-link to="contact" @click.native="$store.commit('TOGGLE_SIDE_MENU')">Contact</router-link>
    </li>
  </ul>
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
  z-index: 2;
  width: 100%;
  bottom: 60px;
  padding: 1rem;
  height: 200px;
  position: fixed;
  list-style: none;
  transition: 0.3s;
  flex-flow: column;
  text-align: center;
  background: #333;
  align-items: center;
  transform: translateY(100%);
  justify-content: space-around;

  a {
    color: #fff;
    display: block;
    font-size: 1.5rem;
    text-decoration: none;
  }

  &.toggle {
    display: flex;
    transform: translateY(0);
  }
}

@media screen and (min-width: 1024px) {
  .side-menu {
    display: none;
  }
}
</style>