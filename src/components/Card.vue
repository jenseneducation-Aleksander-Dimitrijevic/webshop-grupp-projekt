<template>
  <div class="wrapper">
    <div>
      <img src="../assets/vans1.png" alt="vans" />
      <p
        class="info"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati totam corporis similique eligendi doloremque exercitationem odit praesentium quos qui reiciendis, delectus ipsam saepe in ratione voluptatibus. Illum numquam maxime voluptas.</p>
      <p class="price">
        <span>800kr</span>
      </p>
      <button class="cart">Add to basket</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  max-width: 375px;
  padding: 0 1rem;
  h1 {
    color: #b56161;
  }
  p {
    max-width: 300px;
  }
  img {
    width: 100%;
    height: 200px;
    margin: 1rem 0;
  }
  .price {
    text-align: left;
  }
  button {
    background: #b56161;
    width: 300px;
    padding: 1rem;
    margin: auto;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    color: white;
  }
}
</style>