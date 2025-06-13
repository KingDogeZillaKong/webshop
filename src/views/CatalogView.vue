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
      <h1>Life is an Experience</h1>
      <h2>Explore my adventures in development</h2>
  <main class="wrapper" :if="products.length">
    <div v-for="product in products" :key="product?.barcode" class="product-container">     
      <CatalogItem :item="product" :amountInCart="cartStore.cartItems.get(product.barcode)" @addProductToCart="onProductAddedToCart(product)"/>
    </div>

</main>
</template>

<style scoped>
  h1, h2 {
    text-align: center;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .15em;
    /* width: 100%;; */
    /* background-color: orange; */

  }
  /* Medium devices (tablets, 768px and up) */
@media (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Small devices (phones, less than 768px) */
@media (max-width: 767px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}

/* Optional: Portrait orientation */
@media (orientation: portrait) and (max-width: 1024px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}

/* Optional: Landscape orientation */
@media (orientation: landscape) and (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

  .product-container {
    position: relative;
    /* width: 100%; */
    /* background-color: crimson; */
 
  }

</style>
