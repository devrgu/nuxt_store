<template>
  <div class="cart">
    <div class="cart-wrapper content">
      <ul class="cart-header">
        <li class="cart-items-title cart-title cart-Quantity-title-right">Items</li>
        <div class="cart-Quantity-title-left">
          <li class="cart-Quantity-title cart-title">Quantity</li>
          <li class="cart-Subtotal-title cart-title">Subtotal</li>
        </div>
      </ul>
      <div class="cart-content">
        <div class="cart-items">
          <CartItem v-for="item in items" :key="item.id" @subtotalUpdate="subtotalUpdate" :item="item" />
        </div>
        <hr v-if="items.length > 0">
        <CartSummary v-if="items.length > 0" :subtotal="subtotal" :shipping="shipping" :total="total" :itemBasePrice="itemBasePrice" />
        <h1 v-else>CART IS EMPTY</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '~/components/CartItem.vue'
import CartSummary from '~/components/CartSummary.vue'

export default {
  components: {
    CartItem,
    CartSummary
  },
  data() {
    return {
      subtotal: null,
      shipping: 6.00
    }
  },
  computed: {
    ...mapGetters({
      cart: "glasses/cart",
      cards: "glasses/cards"

    }),
    itemBasePrice() {
      this.subtotal = this.items.reduce((acc, cardPrice) => acc + cardPrice.price, 0)
    },
    items() {
      return this.cards.filter(card => this.cart.includes(card.id));
    },
    total() {
      return this.subtotal + this.shipping;
    }
  },
  methods: {
    subtotalUpdate(cardSubtotal) {
      const card = this.items.find(item => item.id === cardSubtotal.id);
      if (card) {
        // Разница в количестве
        const quantityDifference = cardSubtotal.itemQuantity - (card.itemQuantity || 1);

        // Обновляем количество для данной карточки
        card.itemQuantity = cardSubtotal.itemQuantity;
        // Обновляем subtotal на основе разницы в количестве
        this.subtotal += card.price * quantityDifference;
        this.subtotal = parseFloat(this.subtotal.toFixed(2));

        console.log(`Price: ${card.price}, New Quantity: ${cardSubtotal.itemQuantity}, Subtotal: ${this.subtotal}`);
      }
    }
  }
}
</script>

<style scoped>
.cart {
  margin: 65px 0 0 0;
  height: 805444vh;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  background-color: #FF843F;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
}

.cart-wrapper {
  position: relative;
}

.cart-title {
  align-content: center;
}

.cart-Quantity-title-left {
  display: flex;
  margin-right: 77px;
  gap: 101px;
}

.cart-Quantity-title-right {
  margin-left: 110px;
}

.cart-content hr {
  position: absolute;
  right: 0;
  width: 495px;
  height: 5px;
  border: 0;
  background-color: #FF843F;
}
.cart-content h1{
  text-align: center;
  font-size: 48px;
  margin: 65px 0 0 0;
}
</style>