<template>
  <div class="catalog-item">
    <img class="catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="">
    <p class="catalog-item__name">{{product_data.name}}</p>
    <p class="catalog-item__price">Price: {{product_data.price}}</p>
    <button
        class="btn catalog-item__button"
        @click="sendDataToParent"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "catalog__item",
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
    sendDataToParent() {
      //redo to article
      this.$emit('sendArticle', this.product_data.name);
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>