<template>
  <div class="wrapper">
    <h1>Contact</h1>
    <div class="content">
      <div class="info">
        <h3>Get in Toutch!</h3>
        <a href="mailto: abc@example.com">Info@wholesaleshoes.com</a>
        <img src="@/assets/jensenyh.png" class="image1" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 375;
  margin: auto;
  text-align: center;
}
.content {
  padding: 4rem 0;
}
h1 {
  padding: 1rem 0;
}
a {
  padding: 1rem 0;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  &:hover {
    color: grey;
  }
}
img {
  margin: 2rem auto;
  width: 350px;
  height: 200px;
}
@media screen and (min-width: 768px) {
  .wrapper {
    .content {
      padding: 1rem 0;
    }
    padding: 3rem;
    img {
      width: 1024px;
      height: 400px;
    }
  }
}
</style>