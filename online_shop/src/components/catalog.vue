<template>
  <div class="catalog">
    <div class="link-to-cart">
      <router-link :to="{name: 'cart', params: {cart_data: CART}}">
        <div class="link-to-cart__button">
          Cart: {{CART.length}}
        </div>
      </router-link>
    </div>
    <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
    />
  </div>
</template>

<script>

import CatalogItem from "@/components/catalog-item";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "catalog",
  components: {

    CatalogItem

  },
  props: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ])
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS',
        'ADD_TO_CART'
    ]),
    addToCart(data) {

      this.ADD_TO_CART(data);

    }
  },
  mounted() {
    this.GET_PRODUCTS()
    .then((response) => {
      if(response.data) {
        console.log('Data arrived');
      }
    })
  }
}
</script>

<style>
  .link-to-cart {

    position: absolute;
    top: 30px;
    right: 60px;

  }
  .link-to-cart__button {
    padding: 15px 35px;
    border: 1px solid #eee;
    border-bottom: 3px solid #3366CC;
  }
</style>