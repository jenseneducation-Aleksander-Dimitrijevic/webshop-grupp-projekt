<template>
  <div class="wrapper">
    <div class="content">
      <router-link to="/products" id="a" class="button">Buy a shoe!</router-link>
      <h4>100% SATISFACTION GUARANTEE</h4>
    </div>
  </div>
</template>

<script>
// import VueRouter from "vue-router";
export default {};
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
  padding: 10em 0;
  a {
    padding: 1em;
    border: 1px solid #000;
    background-color: #833c3c;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 24px;
  }
  h4 {
    margin: 1rem auto;
    padding: 2rem;
    color: #fff;
  }
}
</style>
