<script setup>
 import { ALL_PRODUCTS } from '@/catalog';
 import CatalogItem from '@/components/CatalogItem.vue';
 const products = ALL_PRODUCTS;
</script>

<template>
  <main class="wrapper" :if="products.length">
    <div v-for="product in products" :key="product?.barcode" class="product-container">
            <CatalogItem :item="product"/>
    </div>

</main>
</template>

<style scoped>

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: .15em;
    background-color: orange;

  }

  .product-container {
    position: relative;
    background-color: crimson;
 
  }

</style>
