<template>
  <div
    class="cart-modal-container"
    :class="{ toggle: cartModalOpen }"
    v-if="products"
  >
    <h1>Din beställning</h1>
    <article>
      <div class="cart-item" v-for="product in products" :key="product.id">
        <section class="item-details">
          <h2>{{ product.name }}</h2>
          <span class="price">{{ product.count * product.price }} kr</span>
          <section class="toggle-amount">
            <button class="decrement" @click="product.count--">-</button>
            <span class="counter">{{ product.count }}</span>
            <button class="increment" @click="product.count++">+</button>
          </section>
        </section>
        <img
          :src="require('@/assets/' + product.img + '.png')"
          alt="cart item image"
        />
      </div>
    </article>
    <span class="total-price">Pris: {{ displayTotalAmount }} kr</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CartModal",
  computed: {
    ...mapState(["cartModalOpen", "products"]),
    ...mapGetters(["displayTotalAmount"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-modal-container {
  right: 50%;
  z-index: 1;
  width: 95%;
  height: 50%;
  bottom: 60px;
  display: none;
  position: fixed;
  border-radius: 5px;
  padding: 2rem 1rem;
  background: #fff;
  transform: translateX(50%);
  box-shadow: 0 0 6px rgba(#000, 0.3);

  article {
    height: 90%;
    overflow: auto;

    .cart-item {
      display: flex;
      margin: 4rem 0;
      font-size: 0.8rem;
      align-items: center;
      padding-right: 10px;
      padding-bottom: 0.5rem;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;

      .item-details {
        .toggle-amount {
          display: flex;
          color: #666;
          margin: 1rem 0;
          padding: 0 1rem;
          background: #eee;
          align-items: center;
          justify-content: space-between;

          .counter {
            cursor: default;
            font-size: 1.2rem;
          }

          button {
            border: none;
            color: #666;
            outline: none;
            cursor: pointer;
            font-size: 1.3rem;
          }
        }
      }

      img {
        width: 100px;
        display: block;
      }
    }
  }

  .total-price {
    display: block;
    font-size: 0.8rem;
    text-align: center;
  }

  &.toggle {
    display: block;
  }
}

@media screen and (min-width: 1024px) {
  .cart-modal-container {
    top: 70px;
    right: 40px;
    height: 50%;
    width: 300px;
    border-radius: 40px 0 40px 40px;
    transform: translateX(0);
  }
}
</style>
