<template>
  <nav class="nav-bar">
    <div class="nav-links">
      <router-link to="/" class="brand">WholeSale Shoes</router-link>|
      <router-link to="/products">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-link class="home-btn" to="/">
      <span class="lnr lnr-home home-icon"></span>
    </router-link>
    <span class="lnr lnr-cart cart-btn" @click="toggleCartModal">
      <span class="bubble">{{ $store.getters.getAllProducts }}</span>
    </span>
    <div class="dots" @click="$store.commit('TOGGLE_SIDE_MENU')">
      <div />
      <div />
      <div />
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleCartModal() {
      this.$store.commit("TOGGLE_CART");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 3rem;
  position: fixed;
  background: #ddd;
  align-items: center;
  justify-content: space-between;

  .nav-links,
  span.cart-icon {
    display: none;

    a {
      color: #999;
      text-decoration: none;

      &:hover {
        color: #833c3c;
        opacity: 0.3;
        transition: 0.3s;
      }
    }
  }

  span {
    color: #777;
    cursor: pointer;
    font-size: 1.4rem;
    position: relative;
    .bubble {
      top: -10px;
      width: 16px;
      right: -10px;
      height: 16px;
      display: flex;
      color: #fff;
      font-size: 0.9rem;
      position: absolute;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background: #b56161;
    }
  }

  .dots {
    display: flex;
    cursor: pointer;
    padding: 10px;

    div {
      width: 6px;
      height: 6px;
      margin: 0 2px;
      border-radius: 50%;
      background: #777;
    }
  }
}

.home-btn {
  text-decoration: none;
}

@media screen and (min-width: 1024px) {
  .nav-bar {
    top: 0;
    padding: 0 2rem;
    background: #fff;

    span.home-icon,
    span.cart-icon,
    .dots {
      display: none;
    }

    .nav-links {
      display: block;

      .brand {
        margin-left: 0;
        font-size: 1.2rem;
        font-weight: bold;
        padding-right: 2rem;
      }

      a {
        color: #000;
        margin-left: 2rem;
      }
    }
  }
}
</style>
