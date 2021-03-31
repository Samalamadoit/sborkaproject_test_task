<template>
  <div class="catalog-item">
    <h1>Catalog</h1>
    <catalog-item
        v-for="product in products"
        :key="product.name"
        v-bind:product_data="product"
        @sendArticle="showChildArticle"
    />
  </div>
</template>

<script>

import CatalogItem from "@/components/catalog-item";

export default {
  name: "catalog",
  components: {

    CatalogItem

  },
  props: {},
  data() {
    return {
      products: [

        {
          name: "New Balance 574 Vintage Brights",
          image: "NewBalance574.jpg",
          price: 650
        },
        {
          name: "New Balance Made in UK 920 Chinese New Year",
          image: "NewBalance920.jpg",
          price: 1200
        },
        {
          name: "New Balance 373 Modern Classics",
          image: "NewBalance373.jpg",
          price: 800
        },
        {
          name: "New Balance Made in UK 670 Chinese New Year",
          image: "NewBalance670.jpg",
          price: 780
        },
        {
          name: "New Balance X-Racer Utility",
          image: "NewBalanceXRacer.jpg",
          price: 1000
        },
        {
          name: "New Balance 5740 Think Colorfully",
          image: "NewBalance5740.jpg",
          price: 940
        }

      ]
    }
  },
  methods: {
    showChildArticle(data) {

      console.log(data);

    }
  }
}
</script>

<style>

</style>