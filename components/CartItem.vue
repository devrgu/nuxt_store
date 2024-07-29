<template>
  <div class="cart-item">
    <div class="cart-item-wrap">
      <div class="cart-item-details">
        <img :src="item.src" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-details-wrap">
          <h3 class="cart-item-name">{{ item.name }}</h3>
          <p class="cart-item-price">${{ item.price }}</p>
          <button @click="removeItem" class="cart-item-remove">Remove</button>
        </div>
      </div>
      <div class="cart-item-summary">
        <div class="cart-item-quantity unselectable">
          <button @click="decreaseQuantity">-</button>
          <span>{{ itemQuantity }}</span>
          <button @click="increaseQuantity">+</button>
        </div>
        <div class="cart-item-subtotal">${{ subtotal }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      itemQuantity: 1
    }
  },
  computed: {
    subtotal() {
      return (this.itemQuantity * this.item.price).toFixed(2) 
    }
  },
  watch: {
    subtotal(newValue, oldValue) {
      this.$emit('subtotalUpdate',{ price: this.item.price, itemQuantity: this.itemQuantity, id: this.item.id });

    },
  },
  methods: {
    ...mapMutations({
      cardDelete: 'glasses/DELETE_CART',
    }),
    decreaseQuantity() {
      if (this.itemQuantity > 1) {
        this.itemQuantity--;
      }
    },
    increaseQuantity() {
      this.itemQuantity++
    },
    removeItem() {
      this.cardDelete(this.item.id);
    }
  }
}
</script>

<style scoped>
.cart-item{
  margin: 10px 0;
}
.cart-item-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 140px;
}

.cart-item-details {
  display: flex;
  font-weight: 600;
}

.cart-item-details img {
  height: 100px;
  width: 270px;
  margin-right: 11px;
}
.cart-item-price{
  margin: 30px 0 9px 0 ;
}
.cart-item-remove{
  color: #FB0A0A;
  font-size: 14px;
  font-weight: lighter;
}
.cart-item-summary {
  display: flex;
  gap: 65px;
  height: 100%;
  margin-right: 77px;
}

.cart-item-summary div {
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  width: 100px;
  height: 100%;
}

.cart-item-summary div button {
  font-size: 24px;
  font-weight: 500;
}

.cart-item-quantity {
  gap: 15px;
}

.cart-item-quantity span {
  display: flex;
  justify-content: center;
  width: 30px;
}
</style>
