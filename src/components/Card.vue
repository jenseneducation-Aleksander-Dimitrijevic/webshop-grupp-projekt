<template>
  <div class="card">
    <div>
      <h1 class="vans">Vans Old school</h1>
      <img src="../assets/vans1.png" alt="vans" />
      <p class="price">
        <span>800kr</span>
      </p>
      <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        totam corporis similique eligendi doloremque exercitationem odit
        praesentium quos qui reiciendis, delectus ipsam saepe in ratione
        voluptatibus. Illum numquam maxime voluptas.
      </p>
      <button class="cart">Add to basket</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  max-width: 375px;
  padding: 1rem;
  .vans {
    color: #b56161;
    text-align: left;
    padding: 1rem 0;
  }
  .info {
    max-width: 300px;
    padding: 2rem 0;
    font-size: 18px;
  }
  img {
    width: 100%;
    height: 200px;
    margin: 1rem 0;
  }
  .price {
    text-align: left;
    font-size: 24px;
    padding: 2rem 0 0 0;
  }
  button {
    background: #b56161;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    color: white;
  }
}
</style>
