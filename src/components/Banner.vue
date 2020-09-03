<template>
  <header
    class="header-showcase"
    :style="{ backgroundImage: `url(${require('@/assets/banner-image.png')})` }"
  >
    <div class="showcase-content">
      <router-link to="/products">Buy a show</router-link>
      <p>100<span>% SATISFACTION GUARANTEE !</span></p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-showcase {
  height: 100vh;
  display: flex;
  padding: 0 1rem;
  background: no-repeat center center/cover;
  &::before {
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(#833c3c, 0.5);
  }

  .showcase-content {
    width: 100%;
    margin: auto;
    text-align: center;
    position: relative;
    a {
      color: #fff;
      display: block;
      padding: 1rem 0;
      font-size: 1.6rem;
      font-style: italic;
      letter-spacing: 2px;
      font-weight: bolder;
      background: #833c3c;
      text-decoration: none;
      text-transform: uppercase;
    }

    p {
      color: #fff;
      margin-top: 1rem;
      font-size: 0.8rem;
      letter-spacing: 1px;
      text-shadow: 2px 2px 2px rgba(#000, 0.3);
      span {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
}
</style>
