<template>
  <div class="catalog__item">
    <img class="catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="">
    <p class="catalog-item__name">{{product_data.name}}</p>
    <p class="catalog-item__price">Price: {{product_data.price}}</p>
    <button
        class="btn catalog-item__button"
        @click="addToCart"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {}
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  },
  computed: {},
  mounted() {
    this.$set(this.product_data, 'quantity', 1);
  }
}
</script>

<style scoped>

</style>