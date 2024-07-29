<template>
  <div class="cart-summary">
  <div class="cart-summary-content">
    <div class="discount-code">
      <label for="discount-code">DISCOUNT CODE</label>
      <input type="text" id="discount-code" v-model="discountCode" />
      <button class="cart-summary-button" @click="applyDiscount">APPLY CODE</button>
    </div>
    <div class="cart-total">
      <div class="cart-total-price">
      <div class="cart-subtotal">
        <span>Subtotal</span>
        <span class="cart-price-result">${{ subtotal ? subtotal : itemBasePrice }}</span>
      </div>
      <div class="cart-shipping">
        <span>Shipping</span>
        <span class="cart-price-result">${{ shipping }}</span>
      </div>
      <div class="cart-final-total">
        <span>Total</span>
        <span class="cart-price-result">${{ total }}</span>
      </div>
      </div>
      <div class="checkout-button-wrap">
      <button @click="checkout" class="checkout-button cart-summary-button">Checkout</button>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  props: {
    subtotal: Number,
    shipping: Number,
    total: Number,
    itemBasePrice: Number
  },
  data() {
    return {
      discountCode: ''
    }
  },
  methods: {
    applyDiscount() {
      // Логика для применения скидки
    },
    checkout() {
      // Логика для перехода к оплате
    }
  } 
}
</script>

<style>
.cart-summary{
  padding: 32px 0 0 0;
}
.cart-summary-content{
  display: flex;
  justify-content: space-between;
}
.cart-total{
  display: flex;
  flex-direction: column;
  gap: 35px;
  font-size: 18px;
  font-weight: 500;
}
.cart-total-price{
  margin: 0 77px 0 0;
}
.cart-price-result{
  display: inline-block;
  float: right;
  text-align: right;
  width: 105px;
  margin-left: 69px;
}
.discount-code{
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
}
.discount-code input{
  width: 235px;
  height: 31px;
  margin: 27px 0;
  border: 1px solid;
  border-color: #000000;
}
.cart-summary-button {
  width: fit-content;
  padding: 12.5px 47px;
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
  background-color: #FF843F;
  border-radius: 25px;

}
.checkout-button{
  float: right;
  font-weight: 600;
  background-color: #FFFFFF;
  color: #FF843F;
  border: 1px #000000 solid;
}
</style>
