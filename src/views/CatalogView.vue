<script setup lang="ts">
 import { ALL_PRODUCTS } from '@/catalog';
 import CatalogItem from '@/components/CatalogItem.vue';
import type { ProductModel } from '@/product-model';
import { useCartStore } from '@/stores/cart';
 const products = ALL_PRODUCTS;
   const cartStore =  useCartStore();

 const onProductAddedToCart = (product: ProductModel) => {
  cartStore.onProductAddedToCart(product);
 }

</script>

<template>
  <main class="wrapper" :if="products.length">
    <div v-for="product in products" :key="product?.barcode" class="product-container">
            <CatalogItem :item="product" :amountInCart="cartStore.cartItems.get(product.barcode)" @addProductToCart="onProductAddedToCart(product)"/>
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
