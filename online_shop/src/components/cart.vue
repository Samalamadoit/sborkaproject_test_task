<template>
  <div class="cart">
    <div class="link-to-cart">
      <router-link :to="{name: 'catalog'}">
        <div class="link-to-cart__button">
          Back to Catalog
        </div>
      </router-link>
    </div>
    <h2 class="cart__title">Cart</h2>
    <p
        class="empty-cart"
        v-if="!cart_data.length"
    >
      You haven't add products to cart.
      Do it!
      <router-link :to="{name: 'catalog'}">
        <div class="cart__back-to-catalog">
          Back to Catalog
        </div>
      </router-link>
    </p>
    <cart-item
        v-for="(cartItem, index) in cart_data"
        :key="cartItem.article"
        :cart_item_data="cartItem"
        @deleteFromCart="deleteFromCart(index)"
    >
    </cart-item>
  </div>
</template>

<script>
import CartItem from "@/components/cart-item";
import {mapActions} from 'vuex';

export default {
  name: "cart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {

  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  }

}
</script>

<style>
.empty-cart {

  margin: 0 20px;

}
.cart__back-to-catalog {

  color: #3366CC;

}
</style>