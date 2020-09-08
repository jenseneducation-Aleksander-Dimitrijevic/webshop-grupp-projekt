<template>
  <div class="cart-modal-container" :class="{ toggle: cartModalOpen }" v-if="products">
    <h1 class="heading">Din beställning</h1>
    <article>
      <div class="cart-item" v-for="product in products" :key="product.id">
        <section class="item-details">
          <h2>{{ product.name }}</h2>
          <span class="price">${{ product.count * product.price }}</span>
          <section class="toggle-amount">
            <button class="decrement" @click="product.count > 0 && product.count--">-</button>
            <span class="counter">{{ product.count }}</span>
            <button class="increment" @click="product.count++">+</button>
          </section>
        </section>
        <img :src="require('@/assets/' + product.img + '.png')" alt="cart item image" />
      </div>
    </article>
    <section class="cart-actions">
      <span class="total-price">Price: ${{ displayTotalAmount }}</span>
      <div class="button-container">
        <button class="action-btn" :disabled="!products.length || displayTotalAmount == 0">Checkout</button>
        <button @click="reset" class="action-btn" v-show="products.length > 0">Rensa</button>
      </div>
    </section>
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
  methods: {
    reset() {
      if (confirm("Är du säker på att du vill rensa kundkorgen?")) {
        this.$router.push({ name: "Home" });
        location.reload();
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-modal-container {
  right: 50%;
  z-index: 4;
  width: 95%;
  height: 60%;
  bottom: 70px;
  display: none;
  position: fixed;
  border-radius: 5px;
  background: #fff;
  transform: translateX(50%);
  padding: 2rem 1rem 4rem 1rem;
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

  &.toggle {
    display: block;
  }

  .cart-actions {
    display: flex;
    margin-top: 1rem;
    .total-price {
      display: block;
      font-size: 0.8rem;
    }

    .button-container {
      margin-left: auto;
    }

    button {
      padding: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      border-radius: 3px;
      margin-left: 0.5rem;
      background: #b56161;
    }

    .action-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      margin-left: auto;
    }
  }
}

@media screen and (min-width: 1024px) {
  .cart-modal-container {
    top: 50px;
    right: 40px;
    height: 70%;
    width: 300px;
    border-radius: 10px 0 10px 10px;
    transform: translateX(0);
  }
}
</style>
