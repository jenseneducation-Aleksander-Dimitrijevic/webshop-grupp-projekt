<template>
  <div class="container">
    <div class="content">
      <h1>Checkout</h1>
      <div class="itemarea">
        <div class="item" v-for="order in orders" :key="order.id">
          <section>
            <h1>{{ order.name }}</h1>
            <p>${{ order.price * order.count }}</p>
          </section>
          <section :style="{ textAlign: 'center' }">
            <img :src="require('../assets/' + order.img + '.png')" alt="product image" />
            <p>X {{ order.count }}</p>
          </section>
        </div>
      </div>
      <div class="shipping">
        <div class="adress-box">
          <h2>Shipping address</h2>
          <p class="location">
            Radhusvägen 111
            <br />1234 Postorten
          </p>
          <p class="changeAdress" @click="handleChangeAddress">Change adress</p>
        </div>
        <input type="radio" v-model="isClicked" id="set-adress-btn" :value="true" />
      </div>
      <div class="total">
        <span>Total: ${{ $store.getters.displayTotalAmount }}</span>
      </div>

      <button
        class="proceed"
        :disabled="!isClicked"
        @click="handleProceed"
        :class="{ complete: proceed, setLoading: isLoading }"
      >
        <span v-if="!isLoading">
          {{
          proceed ? "Your order is on the way!" : "Proceed"
          }}
        </span>
        <div class="loader" v-else></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      proceed: false,
      isLoading: false,
      msg: "You have successfully changed adress!",
    };
  },

  props: ["orders"],

  methods: {
    handleChangeAddress() {
      alert(this.msg);
    },

    handleProceed() {
      this.isLoading = true;
      setTimeout(() => {
        this.proceed = true;
        this.isLoading = false;
        setTimeout(() => {
          location.reload();
        }, 1500);
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  height: 100vh;

  .content {
    width: 100%;
    margin: auto;
    height: 100vh;
    display: flex;
    background: #eee;
    flex-direction: column;
    padding: 2rem 1rem 80px 1rem;
    justify-content: space-between;

    .itemarea {
      .item {
        width: 100%;
        display: flex;
        padding: 10px;
        margin: 1rem 0;
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 0 5px rgba(#000, 0.1);
        img {
          width: 100px;
          display: block;
        }
      }
    }

    .shipping {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .adress-box {
      p.location {
        margin: 1rem 0;
      }

      p.changeAdress {
        cursor: pointer;
        color: #b56161;
        text-decoration: underline;
      }
    }

    #set-adress-btn {
      cursor: pointer;
    }

    button.proceed {
      width: 100%;
      border: none;
      color: #fff;
      outline: none;
      cursor: pointer;
      padding: 20px 5px;
      text-align: center;
      border-radius: 5px;
      letter-spacing: 1px;
      background: #b56161;
      text-transform: uppercase;

      &:disabled {
        background: #ccc;
        cursor: not-allowed;
      }

      &.complete {
        color: #fff;
        background: green;
      }

      .loader {
        width: 20px;
        height: 20px;
        margin: auto;
        border-radius: 50%;
        border: 4px solid #fff;
        border-top: 4px solid #ccc;
        animation: 0.5s spin linear infinite;
      }

      &.setLoading {
        background: #ccc;
        cursor: not-allowed;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .container {
    .content {
      height: 80%;
      background: none;
      max-width: 560px;
    }
  }
}
</style>
