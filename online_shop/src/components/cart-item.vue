<template>
  <div class="cart__item">
    <img class="cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
    <div class="cart-item__info">
      <p class="cart-item-info__name">{{cart_item_data.name}}</p>
      <p class="cart-item-info__price">{{cart_item_data.price}} y.e</p>
      <div class="cart-item__quantity">
        {{cart_item_data.quantity}}
      </div>
      <button
          @click="deleteFromCart"
          class="btn cart-item-info__delete"
      >
        delete
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>