<template>
  <div class="catalog-wrapper">
<!--    keep alive, что бы оставались данные не только из стейта-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {

    name: 'catalog-wrapper',
    props: {},
    data() {
      return {

      };
    },
    computed: {},
    methods: {},
    watch: {},


  }
</script>

<style>


</style>