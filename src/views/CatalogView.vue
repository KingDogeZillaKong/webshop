<script setup lang="ts">
import { ALL_PRODUCTS } from '@/catalog'
import CatalogItem from '@/components/CatalogItem.vue'
import type { ProductModel } from '@/product-model'
import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'
const products = ALL_PRODUCTS
const cartStore = useCartStore()
const catalogSection = ref<HTMLElement | null>(null)
const onProductAddedToCart = (product: ProductModel) => {
  cartStore.onProductAddedToCart(product)
}

const scrollToCatalogSection = () => {
  catalogSection.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}
</script>

<template>
  <h1>Development Adventures</h1>
    <h2 class="underline" @click="scrollToCatalogSection">Explore my development adventures</h2>

      <h2 class="funnyness">In my opinion, years of experience is an inaccurate measure of somebody's experience. I learn much more diving into something new, which is frigthening and challenging, than when I comfortably write simple and easy code I've written hundreds of times before.</h2>

    <h2 class="funnyness">Therefore, I rather use the amount of cappucinos that I would've to drink during a conversation to cover the vision, thoughts, challenges, and decisions that went into it.</h2>

  <main ref="catalogSection" class="wrapper">
    <div v-for="product in products" :key="product?.barcode" class="product-container">
      <CatalogItem
        :item="product"
        :amountInCart="cartStore.cartItems.get(product.barcode)"
        @addProductToCart="onProductAddedToCart(product)"
      />
    </div>
  </main>
</template>

<style scoped>
.funnyness {
  width: 75%;
  text-wrap: wrap;
  margin: auto;
}
.underline {
  cursor: pointer;
  text-decoration: underline 1px solid white;
  text-underline-offset: 0.33em;
  margin-bottom: 1em;
  transition: color 0.33s ease-out;

  &:hover {
    color: silver;
  }
}
h1,
h2 {
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.15em;
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
}
</style>
