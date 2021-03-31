<template>
  <div class="catalog-wrapper">
    <p>{{title}}</p>
    <catalog></catalog>
    <cart></cart>
  </div>
</template>

<script>
  import catalog from "@/components/catalog";
  import cart from "@/components/cart";

  export default {

    name: 'catalog-wrapper',
    components: {
      catalog,
      cart
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      };
    },
    computed: {},
    methods: {},
    watch: {},


  }
</script>

<style>


</style>